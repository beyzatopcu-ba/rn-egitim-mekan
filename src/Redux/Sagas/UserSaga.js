import { fork, takeEvery, call, put, all, spawn } from "@redux-saga/core/effects";
import { setErrorAC, setUserAC, SIGN_IN_REQUEST, SIGN_OUT_REQUEST, SIGN_UP_REQUEST } from '../UserRedux';
import { getCurrentUser, signIn, signOut, signUp, updateUser } from '../../API/Firebase';
import { setIsLoadingAC } from "../LoadingRedux";
import getCategories from "../../API/Categories/ApiRequests";
import { setCategoriesAC } from "../CategoryRedux";

function* getSetCategories() {
    const categoryList = yield call(getCategories);
    yield put(setCategoriesAC(categoryList));
}

function* workerSignIn(action) {
    const {email, password} = action.payload;

    try {

        yield put(setIsLoadingAC(true)); 
        
        yield all([
            call(signIn, email, password),
            call(getSetCategories),
        ]);

        const currentUser = getCurrentUser();
        yield put(setUserAC(currentUser));

        // yield spawn(call(sendReport));

    } catch (error) {
        yield put(setErrorAC(error.message));
    } finally {
        yield put(setIsLoadingAC(false));
    }
}

function* watchSignInRequest() {
    yield takeEvery(SIGN_IN_REQUEST, workerSignIn);
}

function* signUpAndUpdateUser(email, password, displayName) {
    try {
        // Önce signUp yaptırdık
        yield fork(call(signUp, email, password));
        // Sonra kullanıcı adını Firebase'de güncelledik
        yield call(updateUser, displayName);

        // Şu anki kullanıcı bilgisini Firebase'den aldık
        const currentUser = getCurrentUser();
        // Şu anki kullanıcıyı redux'a verdik
        yield put(setUserAC(currentUser));
    } catch(error) {
        
    }
}

function* workerSignUp(action) {

    console.log('worker saga');

    const { email, password, displayName } = action.payload;

    try {

        yield put(setIsLoadingAC(true));

        yield all([
            call(signUpAndUpdateUser, email, password, displayName),
            call(getSetCategories),
        ])

    } catch (error) {
        yield put(setErrorAC(error.message));
    } finally {
        yield put(setIsLoadingAC(false));
    }

}

function* watchSignUpRequest() {
    yield takeEvery(SIGN_UP_REQUEST, workerSignUp);
}


function* workerSignOut() {
    try {

        yield put(setIsLoadingAC(true));

        yield call(signOut);
        yield put(setUserAC(null));

        yield put(setIsLoadingAC(false));

    } catch (error) {
        console.log('ERROR', error);
    }
}


function* watchSignOutRequest() {
    yield takeEvery(SIGN_OUT_REQUEST, workerSignOut)
}

const userSagas = [
    fork(watchSignUpRequest),
    fork(watchSignOutRequest),
    fork(watchSignInRequest),
];

export default userSagas;



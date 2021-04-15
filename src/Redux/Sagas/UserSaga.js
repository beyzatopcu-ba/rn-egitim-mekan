import { fork, takeEvery, call, put } from "@redux-saga/core/effects";
import { setUserAC, SIGN_IN_REQUEST, SIGN_OUT_REQUEST, SIGN_UP_REQUEST } from '../UserRedux';
import { getCurrentUser, signIn, signOut, signUp, updateUser } from '../../API/Firebase';
import { setIsLoadingAC } from "../LoadingRedux";
import getCategories from "../../API/Categories/ApiRequests";
import { setCategoriesAC } from "../CategoryRedux";

function* workerSignIn(action) {
    const {email, password} = action.payload;

    try {

        yield put(setIsLoadingAC(true));  

        yield call(signIn, email, password);
        const currentUser = getCurrentUser();

        const categoryList = yield call(getCategories);
        yield put(setCategoriesAC(categoryList));
        
        yield put(setUserAC(currentUser));


        yield put(setIsLoadingAC(false));

    } catch (error) {
        console.log('ERROR', error);
    }
}

function* watchSignInRequest() {
    yield takeEvery(SIGN_IN_REQUEST, workerSignIn);
}

function* workerSignUp(action) {

    console.log('worker saga');

    const { email, password, displayName } = action.payload;

    try {

        yield put(setIsLoadingAC(true));

        // Önce signUp yaptırdık
        yield call(signUp, email, password);
        // Sonra kullanıcı adını Firebase'de güncelledik
        yield call(updateUser, displayName);

        // Şu anki kullanıcı bilgisini Firebase'den aldık
        const currentUser = getCurrentUser();
        // Şu anki kullanıcıyı redux'a verdik
        yield put(setUserAC(currentUser));

        const categoryList = yield call(getCategories);
        yield put(setCategoriesAC(categoryList));

        yield put(setIsLoadingAC(false));

    } catch (error) {
        console.log('ERROR', error);
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




























// Thunks
export const signInRequest = (email, password) => {
    return dispatch => {
        // isLoading'i true'ya çek
        dispatch(setIsLoadingAC(true));
        // signIn isteği gönder ve gelen user'ı store'a kaydet
        signIn(email, password)
            .then(response => {
                const user = response.user;
                dispatch(setUserAC(user));
            })
            .catch(error => alert(error))
            .finally(() => {
                // isLoading'i false'a çek
                dispatch(setIsLoadingAC(false));
            });
    }
}

export const signUpRequest = (email, password, displayName) => {
    return dispatch => {
        // isLoading'i true'ya çek
        dispatch(setIsLoadingAC(true));
        // signIn isteği gönder ve gelen user'ı store'a kaydet
        signUp(email, password)
            .then(response => {
                const user = response.user;
                dispatch(setUserAC(user));
            })
            .catch(error => alert(error))
            .finally(() => {
                // isLoading'i false'a çek
                dispatch(setIsLoadingAC(false));
            });
    }
}

export const signOutRequest = () => {
    return dispatch => {
        // isLoading'i true'ya çek
        // signOut api isteğini gönder
        // then'de (olumlu sonuçlanırsa) user'ı null'a çek
        // finally'de (her şey bittikten sonra) isLoading'i false'a çek

        dispatch(setIsLoadingAC(true));
        signOut()
            .then(response => {
                dispatch(setUserAC(null));
            })
            .catch(error => console.log(error))
            .finally(() => {
                dispatch(setIsLoadingAC(false));
            })
    }
}
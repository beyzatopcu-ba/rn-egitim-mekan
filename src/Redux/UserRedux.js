import { signIn } from "../API/Firebase";
import { setIsLoadingAC } from "./LoadingRedux";

// Initial State
const INITIAL_STATE = {
    user: null,
    lastUserEmail: '',
};

// Selectors
export const userSelector = state => state.userState.user;
export const lastUserEmailSelector = state => state.userState.lastUserEmail;

// Action Types
const SET_USER = "user/set_user";

// Action Creators
export const setUserAC = (user) => {
    return {
        type: SET_USER,
        payload: { user },
    };
}

// Thunks
export const signInRequest = (email, password) => {
    console.log('signInRequest')
    return dispatch => {
        console.log('dispatching isLoading true');
        // isLoading'i true'ya çek
        dispatch(setIsLoadingAC(true));
        // signIn isteği gönder ve gelen user'ı store'a kaydet
        signIn(email, password)
            .then(response => {
                console.log('dispatching user');
                const user = response.user;
                dispatch(setUserAC(user));
            })
            .catch(error => console.log(error))
            .finally(() => {
                // isLoading'i false'a çek
                console.log('dispatching isLoading false');
                dispatch(setIsLoadingAC(false));
            });
    }
}

export const signUp = () => {

}

export const signOut = () => {

}

// Reducer
export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            const newUser = action.payload.user;
            const lastUserEmail = newUser ? newUser.email : state.lastUserEmail;
            return {
                user: newUser,
                lastUserEmail,
            }
        default:
            return state;
    }
};
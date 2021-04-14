import { signIn, signUp, signOut, updateUser } from "../API/Firebase";
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
export const SIGN_UP_REQUEST = "user/sign_up_request";
export const SIGN_OUT_REQUEST = "user/sign_out_request";
export const SET_USER = "user/set_user";

// Action Creators
export const signUpRequest = (email, password, displayName) => {
    return {
        type: SIGN_UP_REQUEST,
        payload: {
            email,
            password,
            displayName,
        },
    };
}

export const signOutRequest = () => {
    return {
        type: SIGN_OUT_REQUEST,
    };
}

export const setUserAC = (user) => {
    return {
        type: SET_USER,
        payload: { user },
    };
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
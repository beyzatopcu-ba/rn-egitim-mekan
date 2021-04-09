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
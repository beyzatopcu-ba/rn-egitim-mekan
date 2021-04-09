// Initial State
const INITIAL_STATE = {
    user: null,
};

// Selectors
export const userSelector = state => state.userState.user;

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
            return {
                user: newUser,
            }
        default:
            return state;
    }
};
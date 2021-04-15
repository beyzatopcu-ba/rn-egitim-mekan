// Initial State
const INITIAL_STATE = {
    categoryList: [],
};

// Selectors
export const categoryListSelector = globalState => globalState.category.categoryList;

// Action Types
const SET_CATEGORIES = "category/set_categories";

// Action Creators
export const setCategoriesAC = (categoryList) => {
    return {
        type: SET_CATEGORIES,
        payload: { categoryList },
    };
}

// Reducer
export const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                categoryList: action.payload.categoryList,
            }
        default:
            return state;
    }
};
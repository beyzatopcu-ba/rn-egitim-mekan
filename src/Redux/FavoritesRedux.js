// Initial State
const INITIAL_STATE = {
    likedRestList: [],
};

// Selectors
export const likedRestListSelector = globalState => globalState.likedRest.likedRestList;

// Action Types
const ADD_LIKED_RESTAURANT = "likedRest/add_liked_restaurant";
const REMOVE_LIKED_RESTAURANT = "likedRest/remove_liked_restaurant";

// Action Creators
export const addLikedRestaurant = (restaurant) => {
    return {
        type: ADD_LIKED_RESTAURANT,
        payload: { restaurant },
    };
}

export const removeLikedRestaurant = (restaurant) => {
    return {
        type: REMOVE_LIKED_RESTAURANT,
        payload: { restaurant },
    };
}

// Reducer
export const likedRestReducer = (state = INITIAL_STATE, action) => {
    const restaurant = action.payload.restaurant;
    switch (action.type) {
        case ADD_LIKED_RESTAURANT:
            let listCopy = [...state.likedRestList];
            listCopy.push(restaurant);

            return {
                ...state,
                likedRestList: listCopy,
            }
        case REMOVE_LIKED_RESTAURANT:
            let listCopy = [...state.likedRestList];
            
            let listCopyWithoutRestaurant = listCopy.filter(rest => {
                if (rest.id === restaurant.id) {
                    return false;
                }
                return true;
            });

            return {
                likedRestList: listCopyWithoutRestaurant,
            }
        default:
            return state;
    }
};
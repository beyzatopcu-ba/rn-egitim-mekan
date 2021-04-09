import { createStore, combineReducers } from 'redux';
import { userReducer } from './UserRedux';

const rootReducer = combineReducers({
    userState: userReducer,
});

export const store = createStore(rootReducer);
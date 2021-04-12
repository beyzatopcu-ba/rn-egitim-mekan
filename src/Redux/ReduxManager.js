import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import { userReducer } from './UserRedux';
import { loadingReducer } from './LoadingRedux';
import { noteReducer } from './NoteRedux';

const rootReducer = combineReducers({
    userState: userReducer,
    loading: loadingReducer,
    notes: noteReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userState', 'notes'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
// thunk middleware'ini oluşturup aşağıda createStore'a verelim
const thunkMiddleware = applyMiddleware(thunk);

export default () => {
    let store = createStore(persistedReducer, thunkMiddleware)
    let persistor = persistStore(store)
    return { store, persistor }
}
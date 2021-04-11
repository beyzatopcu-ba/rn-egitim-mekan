import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

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


export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}
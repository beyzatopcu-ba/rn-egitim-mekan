import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './Sagas/RootSaga';
import { userReducer } from './UserRedux';
import { loadingReducer } from './LoadingRedux';
import { noteReducer } from './NoteRedux';
import { categoryReducer } from './CategoryRedux';

const rootReducer = combineReducers({
    userState: userReducer,
    loading: loadingReducer,
    notes: noteReducer,
    category: categoryReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userState', 'notes', 'category'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
    let persistor = persistStore(store)

    sagaMiddleware.run(rootSaga);

    return { store, persistor }
}
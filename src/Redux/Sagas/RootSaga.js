import { all } from 'redux-saga/effects';
import userSagas from './UserSaga';

export default function* root() {
    yield all([
        // Oluşturduğumuz yeni saga dosyalarını (numberSagas gibi) buraya ekliyoruz
        ...userSagas,
    ])
};

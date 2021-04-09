/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import MainNavigation from './src/Navigation/MainNavigation';
import configureStore from './src/Redux/ReduxManager';

const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App;





/*
// Array destructuring

const arr = ["elma", 5, false];
const [var1, var2] = arr;

const var1 = arr[0];
const var2 = arr[1];

// Object destructuring
const obj = {
  name: "abc",
  age: 5,
  date: "",
  isLogin: true,
};

let { age, isLogin } = obj;
let age = obj.age;
let isLogin = obj.isLogin;
*/

import React, { useState } from 'react';
import AuthScreenUI from './AuthScreenUI';
import { Alert } from 'react-native';

import {signIn, signUp} from "../../API/Firebase";

const AuthScreen = props => {

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const onPress_SignUp = () => {
        console.log('signup function:', signUp)
       signUp(email, password)
            .then(response => {
                alert('signed up')
                console.log(response);
            })
            .catch(error => {
                alert(error);
            })
    }

    const onPress_SignIn = () => {
        signIn(email, password)
            .then(response => {
                alert('signed in')
                console.log(response);
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <AuthScreenUI
            emailValue={email}
            passwordValue={password}
            passwordConfirmValue={passwordConfirm}
            onChangeText_Email={setEmail}
            onChangeText_Password={setPassword}
            onChangeText_PasswordConfirm={setPasswordConfirm}
            onPress_SignUp={onPress_SignUp}
            onPress_SignIn={onPress_SignIn}
            loading={props.loading}
            error={props.error}
        />
    );

}


export default AuthScreen;

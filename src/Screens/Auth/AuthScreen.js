import React, { useState } from 'react';
import AuthScreenUI from './AuthScreenUI';
import { Alert } from 'react-native';

const AuthScreen = props => {

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const onPress_SignUp = () => {
        
    }

    const onPress_SignIn = () => {
        
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

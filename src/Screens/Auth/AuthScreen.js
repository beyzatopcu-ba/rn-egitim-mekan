import React, { useState } from 'react';
import AuthScreenUI from './AuthScreenUI';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {signIn, signUp} from "../../API/Firebase";
import { lastUserEmailSelector, signUpRequest, signInRequest } from '../../Redux/UserRedux';
import { setIsLoadingAC } from '../../Redux/LoadingRedux';

const AuthScreen = props => {

    const lastUserEmail = useSelector(lastUserEmailSelector);

    const [email, setEmail] = useState(lastUserEmail);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useDispatch();

    const onPress_SignUp = () => {
        if (password === passwordConfirm) {
            dispatch(signUpRequest(email, password));
        }
        else {
            alert('Şifreler eşleşmiyor');
        }
    }

    const onPress_SignIn = () => {
        console.log('onPress_SignIn')
        // ***************************************** //
        ////// AŞAĞIYA dispatch YAZMAYI UNUTMUŞUM //////
        // ***************************************** //
        dispatch(signInRequest(email, password));
        // ***************************************** //
        ////// YUKARIYA dispatch YAZMAYI UNUTMUŞUM //////
        // ***************************************** //
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

import React, { useState } from 'react';
import AuthScreenUI from './AuthScreenUI';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {signIn, signUp} from "../../API/Firebase";
import { lastUserEmailSelector, setUserAC } from '../../Redux/UserRedux';
import { setIsLoadingAC } from '../../Redux/LoadingRedux';

const AuthScreen = props => {

    const lastUserEmail = useSelector(lastUserEmailSelector);

    const [email, setEmail] = useState(lastUserEmail);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useDispatch();

    const onPress_SignUp = () => {
        dispatch(setIsLoadingAC(true));
        signUp(email, password)
            .then(response => {
                const setUserActionObj = setUserAC(response.user);
                dispatch(setUserActionObj);
            })
            .catch(error => {
                alert(error);
            })

        dispatch(setIsLoadingAC(false));
    }

    const onPress_SignIn = () => {
        dispatch(setIsLoadingAC(true));
        signIn(email, password)
            .then(response => {
                // response.user'ı redux store at
                const setUserActionObj = setUserAC(response.user);
                dispatch(setUserActionObj);
            })
            .catch(error => {
                alert(error)
            })
            .finally(() => {
                dispatch(setIsLoadingAC(false));
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

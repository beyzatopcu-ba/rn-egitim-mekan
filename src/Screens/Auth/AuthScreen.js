import React, { useState } from 'react';
import AuthScreenUI from './AuthScreenUI';
import { useDispatch, useSelector } from 'react-redux';

import { lastUserEmailSelector, signUpRequest, signInRequest, errorSelector } from '../../Redux/UserRedux';

const AuthScreen = props => {

    const lastUserEmail = useSelector(lastUserEmailSelector);
    const errorMessage = useSelector(errorSelector);

    const [email, setEmail] = useState(lastUserEmail);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useDispatch();

    const onPress_SignUp = () => {
        if (password === passwordConfirm) {
            dispatch(signUpRequest(email, password, 'Kullanıcı Adı'));
        }
        else {
            alert('Şifreler eşleşmiyor');
        }
    }

    const onPress_SignIn = () => {
        dispatch(signInRequest(email, password));
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
            error={errorMessage}
        />
    );

}


export default AuthScreen;

import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    Alert,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import AuthInput from '../../Components/AuthInput';
import AuthButton from '../../Components/AuthButton';

import Images from '../../Constants/Images';

import styles from './styles/AuthScreenStyles';

const AuthScreen = props => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView style={styles.keyboardAvoiding} behavior={'padding'} keyboardVerticalOffset={0}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}}>
                <View style={styles.container}>
                    <View style={styles.appLogoContainer}>
                        <Image source={Images.appLogoLarge} style={styles.image} />
                    </View>
                    <View style={styles.inputsContainer}>
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.emailValue}
                                onChangeText={props.onChangeText_Email}
                                placeholder={'E-posta'} />
                        </View>
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.passwordValue}
                                onChangeText={props.onChangeText_Password}
                                placeholder={'Şifre'}
                                secureTextEntry={true} />
                        </View>
                        {
                            isLogin ?
                                null
                                :
                                <View style={styles.inputContainer}>
                                    <AuthInput
                                        value={props.passwordConfirmValue}
                                        onChangeText={props.onChangeText_PasswordConfirm}
                                        placeholder={'Şifre Tekrarı'}
                                        secureTextEntry={true} />
                                </View>
                        }
                    </View>
                    <Text>{props.error}</Text>
                    <View style={styles.buttonsContainer}>
                        <AuthButton
                            onPress={isLogin ? props.onPress_SignIn : props.onPress_SignUp}
                            disabled={false}
                            text={isLogin ? 'GİRİŞ YAP' : 'KAYIT OL'} />
                        <TouchableOpacity style={styles.signupTouchable} onPress={() => setIsLogin(!isLogin)}>
                            <Text style={styles.signupText}>
                                {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.appNameContainer}>
                        <Text style={styles.appNameText}>MEKAN</Text>
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

}

export default AuthScreen;

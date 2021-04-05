import React from 'react';

import { TextInput, View } from 'react-native';

import BorderedBox from './BorderedBox';

import styles from './Styles/AuthInputStyles';

const AuthInput = props => {
    return (
        <BorderedBox borderColor={'white'}>
            <View style={styles.inputContainer}>
                <TextInput
                    autoCapitalize={'none'}
                    secureTextEntry={props.secureTextEntry}
                    style={styles.input}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    autoCorrect={false}
                    placeholder={props.placeholder}
                    placeholderTextColor={'rgba(255,255,255,0.6)'} />
            </View>
        </BorderedBox>
    );
};

export default AuthInput;

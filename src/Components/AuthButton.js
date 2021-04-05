import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import BorderedBox from './BorderedBox';

import styles from './Styles/AuthButtonStyles';

const AuthButton = (props) => {
    return (
        <BorderedBox borderColor={'white'} backgroundColor={'white'}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={props.onPress}
                disabled={props.disabled}>
                <Text style={styles.text}>{props.text.toLocaleUpperCase('tr')}</Text>
            </TouchableOpacity>
        </BorderedBox>
    );
};

export default AuthButton;

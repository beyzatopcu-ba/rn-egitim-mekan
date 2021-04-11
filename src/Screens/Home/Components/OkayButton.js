import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from '../Styles/OkayButtonStyles';

const OkayButton = props => {
    return (
        <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
            <Text style={styles.text}>ARA</Text>
        </TouchableOpacity>
    );
}

export default OkayButton;
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './Styles/CitySelectionButtonStyles';

const CitySelectionButton = props => {
    return (
        <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
            <Text style={styles.text}>ŞEHİR SEÇİN</Text>
        </TouchableOpacity>
    );
}

export default CitySelectionButton;
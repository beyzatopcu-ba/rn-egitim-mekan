import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './Styles/CitySelectionButtonStyles';

const CitySelectionButton = props => {
    const cityName = props.cityName ? props.cityName : "ŞEHİR SEÇİN";
    return (
        <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
            <Text style={styles.text}>{cityName.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

export default CitySelectionButton;
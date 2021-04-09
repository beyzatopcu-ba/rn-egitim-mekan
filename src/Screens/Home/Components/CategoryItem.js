import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from '../Styles/CategoryItemStyles';

const CategoryItem = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}
            disabled={props.disabled}>
            <Text
            numberOfLines={1}
            style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default CategoryItem;
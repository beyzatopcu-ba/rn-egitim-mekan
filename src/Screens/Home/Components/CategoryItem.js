import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from '../Styles/CategoryItemStyles';

const CategoryItem = props => {
    return (
        <View style={styles.container}>
            <Text 
            numberOfLines={1}
            style={styles.text}>{props.text}</Text>
        </View>
    );
}

export default CategoryItem;
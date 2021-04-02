import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from '../Styles/CategoryItemStyles';

const CategoryItem = props => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text 
            numberOfLines={1}
            style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default CategoryItem;
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import getStyles from '../Styles/CategoryItemStyles';

const CategoryItem = props => {
    const styles = getStyles(props.disabled);
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
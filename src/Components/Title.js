import React from 'react';
import { Text } from 'react-native';

import styles from './Styles/TitleStyles';

const Title = props => {
    return (
        <Text style={styles.text}>{props.text}</Text>
    );
}

export default Title;
import React from 'react';
import {Image} from 'react-native';

import styles from './Styles/HeaderBackImageStyles';

const HeaderBackImage = props => {
    return (
        <Image
            style={styles.image}
            source={require('../Assets/Images/arrow-left.png')} />
    )
}

export default HeaderBackImage;
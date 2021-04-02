import React from 'react';
import {Image} from 'react-native';
import { Images } from '../Constants';

import styles from './Styles/HeaderBackImageStyles';

const HeaderBackImage = props => {
    return (
        <Image
            style={styles.image}
            source={Images.arrowLeft} />
    )
}

export default HeaderBackImage;
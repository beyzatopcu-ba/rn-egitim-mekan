import React from 'react';
import {Image} from 'react-native';

const HeaderBackImage = props => {
    return (
        <Image
            style={{ marginLeft: 20 }}
            source={require('../Assets/Images/arrow-left.png')} />
    )
}

export default HeaderBackImage;
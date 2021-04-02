import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import { Images } from '../Constants';

import styles from './Styles/HeaderLeftStyles';

const HeaderLeft = props => {

    const _onPress_HeaderLeft = () => {
        props.navigation.navigate('home-screen');
    }

    return (
        <TouchableOpacity onPress={_onPress_HeaderLeft}>
            <Image 
                style={styles.image}
                source={Images.appLogo}/>
        </TouchableOpacity>
    );
}

export default HeaderLeft;
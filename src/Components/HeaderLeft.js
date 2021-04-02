import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const HeaderLeft = props => {

    const _onPress_HeaderLeft = () => {
        props.navigation.navigate('home-screen');
    }

    return (
        <TouchableOpacity style={{}} onPress={_onPress_HeaderLeft}>
            <Image 
                style={{marginLeft: 20}}
                source={require('../Assets/Images/app-logo.png')}/>
        </TouchableOpacity>
    );
}

export default HeaderLeft;
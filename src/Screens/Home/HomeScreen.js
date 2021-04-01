import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = props => {

    const _onPress_GoToRestaurants = () => {
        props.navigation.navigate("restaurants-screen");
    }


    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>HomeScreen'im ben</Text>
            <TouchableOpacity onPress={_onPress_GoToRestaurants}>
                <Text>Restoran ekranına git</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;
import React from 'react';
import { View, Text } from 'react-native';
import tryCatch from './TryCatch/trycatch';

const ProfileScreen = props => {
    let returnedValue = tryCatch();
    console.log(returnedValue);
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen;
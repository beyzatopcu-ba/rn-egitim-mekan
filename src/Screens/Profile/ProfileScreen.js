import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tryCatch from './TryCatch/trycatch';
import setTimeoutFunction from './SetTimeout/setTimeoutFunction';
import promiseFunction from './Promise/Promises';
import {asyncAwaitFunction, exampleTwo} from './AsyncAwait/AsyncAwait';

const ProfileScreen = props => {
    /*
    let returnedValue = tryCatch();
    console.log(returnedValue);
    */
   /*
    setTimeoutFunction();

    const onPress = () => {
        setTimeout(() => {
            alert('Selam')
        }, 3000);
    }
    */

    /*
    promiseFunction();
    */

    /*
    asyncAwaitFunction();
    */
   exampleTwo();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>ProfileScreen</Text>
            <TouchableOpacity>
                <Text>Bekletip alert göster</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen;
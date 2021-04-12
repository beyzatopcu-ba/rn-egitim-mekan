import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {signOutRequest, userSelector} from '../../Redux/UserRedux';

import BorderedBox from '../../Components/BorderedBox'

import { Colors } from '../../Constants';
import styles from './Styles/ProfileScreenStyles';

import startGeneratorFunctionsLesson from './GeneratorFunctions/GeneratorFunctions';

const ProfileScreen = props => {

    startGeneratorFunctionsLesson();

    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const _onPress_SignOut = () => {
        dispatch(signOutRequest());
    }

    return (
        <View style={styles.container}>
            <View style={styles.emailContainer}>
                <Text style={styles.emailText}>
                    {user.email}
                </Text>
            </View>
            <View style={styles.signOutButtonContainer}>
                <BorderedBox borderColor={Colors.mainColor}>
                    <TouchableOpacity onPress={_onPress_SignOut} style={styles.signOutTouchable}>
                        <Text style={styles.signOutText}>Çıkış Yap</Text>
                    </TouchableOpacity>
                </BorderedBox>
            </View>
        </View>
    )
}

export default ProfileScreen;
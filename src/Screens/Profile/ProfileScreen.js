import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {setUserAC, userSelector} from '../../Redux/UserRedux';

import {signOut} from '../../API/Firebase';

import BorderedBox from '../../Components/BorderedBox'

import { Colors } from '../../Constants';
import styles from './Styles/ProfileScreenStyles';
import { setIsLoadingAC } from '../../Redux/LoadingRedux';

const ProfileScreen = props => {

    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const _onPress_SignOut = () => {
        dispatch(setIsLoadingAC(true));
        signOut()
            .then(response => {
                dispatch(setUserAC(null));
            })
            .catch(error => console.log(error))
            .finally(() => {
                dispatch(setIsLoadingAC(false));
            })
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
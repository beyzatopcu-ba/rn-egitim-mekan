import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../Screens/Profile/ProfileScreen';

import StackScreenOptions from './Commons/StackScreenOptions';
import getMainStackScreenOptions from './Commons/MainStackScreenOptions';


const ProfileStack = createStackNavigator();

const ProfileStackNavigation = () => {
    return (
        <ProfileStack.Navigator screenOptions={StackScreenOptions}>
            <ProfileStack.Screen 
                name="profile-screen"
                component={ProfileScreen}
                options={(params) => {
                    return getMainStackScreenOptions(params, 'Hesabım');
                }}
            />
        </ProfileStack.Navigator>
    )
};

export default ProfileStackNavigation;
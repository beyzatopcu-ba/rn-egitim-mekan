import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import HeaderLeft from '../Components/HeaderLeft';
import StackScreenOptions from './Commons/StackScreenOptions';

const ProfileStack = createStackNavigator();

const ProfileStackNavigation = () => {
    return (
        <ProfileStack.Navigator screenOptions={StackScreenOptions}>
            <ProfileStack.Screen 
                name="profile-screen"
                component={ProfileScreen}
                options={(params) => {
                    // React Navigation, parametre olarak 'navigation' nesnesini veriyor
                    let navigation = params.navigation;
                    return {
                        title: 'Hesabım',
                        // HeaderLeft'e 'navigation' props'unu ekleyen ufak component yazdık
                        // HigherOrderComponent oldu bu
                        headerLeft: () => <HeaderLeft navigation={navigation} />,
                    }
                }}
            />
        </ProfileStack.Navigator>
    )
};

export default ProfileStackNavigation;
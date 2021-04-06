import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Navigators
import TabNavigation from './TabNavigation';
import MainStackNavigation from './MainStackNavigation';
import AuthNavigation from './AuthNavigation';

const isLoggedIn = false;

const MainNavigation = props => {
    return (
        <NavigationContainer>
            {/* Alt 1 : stack içinde tab */}
            {/* <MainStackNavigation /> */}
            {/* Alt 2: tab içinde stack */}
            {
                isLoggedIn ?
                <TabNavigation />
                :
                <AuthNavigation />
            }
        </NavigationContainer>
    )
}

export default MainNavigation;
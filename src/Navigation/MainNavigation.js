import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// Navigators
import TabNavigation from './TabNavigation';
import MainStackNavigation from './MainStackNavigation';
import AuthNavigation from './AuthNavigation';

import { userSelector } from '../Redux/UserRedux';

const MainNavigation = props => {

    const loggedInUser = useSelector(userSelector);

    return (
        <NavigationContainer>
            {/* Alt 1 : stack içinde tab */}
            {/* <MainStackNavigation /> */}
            {/* Alt 2: tab içinde stack */}
            {
                loggedInUser ?
                <TabNavigation />
                :
                <AuthNavigation />
            }
        </NavigationContainer>
    )
}

export default MainNavigation;
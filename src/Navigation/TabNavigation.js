import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import FavoritesScreen from '../Screens/Favorites/FavoritesScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';

// Navigators
import HomeStackNavigator from './HomeStackNavigation';

const Tabs = createBottomTabNavigator();

const TabNavigation = props => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen 
                name="home-stack"
                component={HomeStackNavigator}
                options={{
                    title: "Anasayfa",
                }}
            />
            <Tabs.Screen 
                name="favorites-screen"
                component={FavoritesScreen}
                options={{
                    title: "Favoriler",
                }}
            />
            <Tabs.Screen 
                name="profile-screen"
                component={ProfileScreen}
                options={{
                    title: "Hesabım"
                }}
            />
        </Tabs.Navigator>
    )
}

export default TabNavigation;
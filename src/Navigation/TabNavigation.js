import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import FavoritesScreen from '../Screens/Favorites/FavoritesScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';

// Navigators
import HomeStackNavigator from './HomeStackNavigation';
import FavoritesStackNavigation from './FavoritesStackNavigator';

const Tabs = createBottomTabNavigator();

const TabNavigation = props => {
    return (
        <Tabs.Navigator>
            {/* Alt 1: stack içinde tab */}
            {/* Hiyerarşiyi değiştirip, stack içinde tab yaptık */}
            {/* <Tabs.Screen 
                name="home-screen"
                component={HomeScreen}
                options={{
                    title: "Anasayfa",
                }}
            /> */}

            {/* Alt 2: tab içinde stack */}
            {/* 
            Bu hiyerarşide, tab içinde stack var
            Screen'lere bir Stack Navigator verebiliyoruz.
            Hatta herhangi bir navigator verebiliyoruz.
             */}
            <Tabs.Screen 
                name="home-stack"
                component={HomeStackNavigator}
                options={{
                    title: "Anasayfa",
                }}
            />
            <Tabs.Screen 
                name="favorites-stack"
                component={FavoritesStackNavigation}
                options={{
                    title: "Favoriler",
                }}
            />
            <Tabs.Screen 
                // mecburi (her bir ekranın id'si ve unique olmak zorunda)
                name="profile-screen"
                // mecburi (ekranımızın componenti)
                component={ProfileScreen}
                // opsiyonel (tab üzerinde görünecek başlık)
                options={{
                    title: "Hesabım"
                }}
            />
        </Tabs.Navigator>
    )
}

export default TabNavigation;
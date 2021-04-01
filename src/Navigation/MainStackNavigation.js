import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigation';
import RestaurantsScreen from '../Screens/Restaurants/RestaurantsScreen';

const MainStack = createStackNavigator();

// Alt 1: stack içinde tab
/*
Eğer tabs kısmı ve restoran ekranı, aynı cihazı ekranı alanını paylaşacaksa,
kardeş olmalılar.
Restoran ekranı, tabs navigator'ın üstüne kapandığı için de, Stack Navigator
içinde kardeş olmalılar
*/
const MainStackNavigation = props => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="tabs"
                component={TabNavigator}
                options={{
                    title: 'tabs',
                }}
             />
            <MainStack.Screen 
                name="restaurants-screen"
                component={RestaurantsScreen}
                options={{
                    title: 'Restoranlar'
                }}/>
        </MainStack.Navigator>
    )
}

export default MainStackNavigation;
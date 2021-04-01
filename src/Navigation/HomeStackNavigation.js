import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screen
import HomeScreen from '../Screens/Home/HomeScreen';
import RestaurantsScreen from '../Screens/Restaurants/RestaurantsScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigation = props => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="home-screen"
                component={HomeScreen}
                options={{
                    title: 'Anasayfa',
                }}
            />
            <HomeStack.Screen 
                name="restaurants-screen"
                component={RestaurantsScreen}
                options={{
                    title: 'Anasayfa',
                }}
            />
        </HomeStack.Navigator>
    )
}

export default HomeStackNavigation;
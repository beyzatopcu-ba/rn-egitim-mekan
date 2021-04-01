import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from '../Screens/Favorites/FavoritesScreen';

const FavoritesStack = createStackNavigator();

const FavoritesStackNavigation = () => {
    return (
        <FavoritesStack.Navigator>
            <FavoritesStack.Screen 
                name="favorites-screen"
                component={FavoritesScreen}
                options={{
                    title: 'Favoriler'
                }}
            />
        </FavoritesStack.Navigator>
    )
};

export default FavoritesStackNavigation;
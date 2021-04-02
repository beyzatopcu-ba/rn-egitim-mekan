import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavoritesScreen from '../Screens/Favorites/FavoritesScreen';

import StackScreenOptions from './Commons/StackScreenOptions';
import getMainStackScreenOptions from './Commons/MainStackScreenOptions';


const FavoritesStack = createStackNavigator();

const FavoritesStackNavigation = () => {
    return (
        <FavoritesStack.Navigator screenOptions={StackScreenOptions}>
            <FavoritesStack.Screen 
                name="favorites-screen"
                component={FavoritesScreen}
                options={(params) => {
                    return getMainStackScreenOptions(params, 'Favoriler');
                }}
            />
        </FavoritesStack.Navigator>
    )
};

export default FavoritesStackNavigation;
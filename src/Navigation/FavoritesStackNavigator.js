import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from '../Screens/Favorites/FavoritesScreen';
import HeaderLeft from '../Components/HeaderLeft';
import StackScreenOptions from './Commons/StackScreenOptions';

const FavoritesStack = createStackNavigator();

const FavoritesStackNavigation = () => {
    return (
        <FavoritesStack.Navigator screenOptions={StackScreenOptions}>
            <FavoritesStack.Screen 
                name="favorites-screen"
                component={FavoritesScreen}
                options={(params) => {
                    // React Navigation, parametre olarak 'navigation' nesnesini veriyor
                    let navigation = params.navigation;
                    return {
                        title: 'Favoriler',
                        // HeaderLeft'e 'navigation' props'unu ekleyen ufak component yazdık
                        // HigherOrderComponent oldu bu
                        headerLeft: () => <HeaderLeft navigation={navigation} />,
                    }
                }}
            />
        </FavoritesStack.Navigator>
    )
};

export default FavoritesStackNavigation;
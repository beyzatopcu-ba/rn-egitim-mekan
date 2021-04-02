import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';

// Screen
import HomeScreen from '../Screens/Home/HomeScreen';
import RestaurantsScreen from '../Screens/Restaurants/RestaurantsScreen';

// Misc
import StackScreenOptions from './Commons/StackScreenOptions';
import getMainStackScreenOptions from './Commons/MainStackScreenOptions';

const HomeStack = createStackNavigator();

// Alt 2: tab içinde stack
// Anasayfa ile restoran ekranı aynı alanı paylaşıyorlar.
// Bu yüzden kardeş olmalılar.
// Restoran ekranı, anasayfanın üzerine bindiği için de Stack içinde kardeş olmalılar.
const HomeStackNavigation = props => {

    return (
        <HomeStack.Navigator 
            screenOptions={StackScreenOptions}
        >
            <HomeStack.Screen 
                name="home-screen"
                component={HomeScreen}
                // HeaderLeft'e 'navigation' nesnesini props olarak gönderebilmek
                // için, 'options'ı fonksiyon olarak yazdık.
                options={(params) => {
                    return getMainStackScreenOptions(params, 'Anasayfa');
                }}
            />
            <HomeStack.Screen 
                name="restaurants-screen"
                component={RestaurantsScreen}
                options={{
                    title: 'Restoranlar',
                }}
            />
        </HomeStack.Navigator>
    )
}

export default HomeStackNavigation;
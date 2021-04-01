import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screen
import HomeScreen from '../Screens/Home/HomeScreen';
import RestaurantsScreen from '../Screens/Restaurants/RestaurantsScreen';

const HomeStack = createStackNavigator();

// Alt 2: tab içinde stack
// Anasayfa ile restoran ekranı aynı alanı paylaşıyorlar.
// Bu yüzden kardeş olmalılar.
// Restoran ekranı, anasayfanın üzerine bindiği için de Stack içinde kardeş olmalılar.
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
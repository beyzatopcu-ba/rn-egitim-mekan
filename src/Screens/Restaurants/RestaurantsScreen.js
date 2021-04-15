import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import getRestaurants from '../../API/Restaurants/Api';
import CitySelectionButton from '../../Components/CitySelectionButton';
import Title from '../../Components/Title';
import RestaurantItem from './Components/RestaurantItem';

import styles from './Styles/RestaurantsScreenStyles';

const RestaurantsScreen = props => {

    const [ restaurantList, setRestaurantList ] = useState([]);

    const { category, city } = props.route.params;

    useEffect(() => {
        props.navigation.setOptions({
            title: category.name,
        });
    }, []);

    useEffect(() => {
        // Api'den restoranları çek
        getRestaurants(city.id, category.id)
            .then(restaurantList => {
                setRestaurantList(restaurantList);
            })
            .catch(error => console.log(error));
    })

    renderRestaurantItem = ({item}) => {
        return (
            <RestaurantItem restaurant={item} />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.citySelectionButtonContainer}>
                <CitySelectionButton
                    cityName={city.name}
                    disabled={true}
                />
            </View>
            <View style={styles.titleContainer}>
                <Title text={`"${category.name}" kategorisindeki restoranlar`} />
            </View>
            <View style={{flex: 1}}>
                <FlatList 
                    data={restaurantList}
                    renderItem={renderRestaurantItem}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        </View>
    )
}

export default RestaurantsScreen;
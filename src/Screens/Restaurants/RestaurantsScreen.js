import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const RestaurantsScreen = props => {
    console.log('RestaurantsScreen props', props)
    const { category, city } = props.route.params;

    useEffect(() => {
        
    })

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{"Seçilen kategori: " + category.name}</Text>
            <Text>{"Seçilen şehir: " + city.name}</Text>
        </View>
    )
}

export default RestaurantsScreen;
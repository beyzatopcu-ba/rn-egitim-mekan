import React from 'react';
import { Image, Text, View } from 'react-native';
import { Images } from '../../../Constants';

import styles from '../Styles/RestaurantItemStyles';

const RestaurantItem = props => {
    const { restaurant } = props;
    
    let imageSource = restaurant.imageURL !== '' ?
        {uri: restaurant.imageURL} : Images.defaultRestaurantImage;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={imageSource}/>
            </View>
            <View style={styles.midContainer}>
                <Text
                    numberOfLines={1}
                    style={styles.nameText}>{restaurant.name}</Text>
                <Text
                    numberOfLines={1}
                    style={styles.locationText}>{restaurant.location}</Text>
                <Text
                    numberOfLines={1}
                    style={styles.cuisinesText}>{restaurant.cuisines}</Text>
            </View>
            <View style={styles.rightContainer}>
                <View>
                    <Text>o</Text>
                </View>
                <Text style={styles.ratingText}>{restaurant.rating}</Text>
            </View>
        </View>
    );
};

export default RestaurantItem;

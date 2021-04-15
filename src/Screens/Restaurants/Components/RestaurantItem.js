import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Images } from '../../../Constants';
import HeartEmpty from '../../../Assets/Svgs/heart-empty.svg';
import HeartFilled from '../../../Assets/Svgs/heart-filled.svg';

import styles from '../Styles/RestaurantItemStyles';

const RestaurantItem = props => {
    const { restaurant } = props;
    const [ isLiked, setIsLiked ] = useState(false);
    
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
                <TouchableOpacity style={styles.heartIconContainer} onPress={() => setIsLiked(!isLiked)}>
                    {
                        isLiked ?
                        <HeartFilled width="100%" height="100%" style={styles.heartFilledIcon}/>
                        :
                        <HeartEmpty width="100%" height="100%" style={styles.heartEmptyIcon}/>
                    }
                </TouchableOpacity>
                <Text style={styles.ratingText}>{restaurant.rating}</Text>
            </View>
        </View>
    );
};

export default RestaurantItem;

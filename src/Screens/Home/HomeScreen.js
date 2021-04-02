import React from 'react';
import { View, FlatList, Text } from 'react-native';
import CitySelectionButton from '../../Components/CitySelectionButton';
import Title from '../../Components/Title';
import CategoryItem from './Components/CategoryItem';

import styles from './Styles/HomeScreenStyles';

const dummyCategories = [
    {
        categoryId: 1,
        categoryName: 'DeliveryDeliveryDelivery',
    },
    {
        categoryId: 2,
        categoryName: 'Dine-out',
    },
    {
        categoryId: 3,
        categoryName: 'Catching-up',
    },
    {
        categoryId: 4,
        categoryName: 'Nightlife',
    },
    {
        categoryId: 5,
        categoryName: 'Delivery',
    },
]

const HomeScreen = props => {

    const _onPress_GoToRestaurants = () => {
        props.navigation.navigate("restaurants-screen");
    }

    const _renderCategoryItem = ({item}) => {
        return (
            <CategoryItem text={item.categoryName}/>
        )
    }

    const EmptyComponent = props => {
        return <Text>Boş</Text>
    }


    return (
        <View style={styles.container}>
            <View style={styles.citySelectionButtonContainer}>
                {/* CitySelectionButton */}
                <CitySelectionButton />
            </View>
            <View>
                {/* Title */}
                <Title text="Kategoriler"/>
            </View>
            <View>
                {/* CategoryList */}
                <FlatList 
                    ListEmptyComponent={EmptyComponent}
                    // Render edilecek itemlerin listesi (array)
                    data={dummyCategories}
                    // Her bir itemin nasıl render edileceği (fonksiyon)
                    renderItem={_renderCategoryItem}
                    // Her bir itemin 'key'sinin ne olacağı (fonksiyon)
                    keyExtractor={item => item.categoryId}
                    // İki sütun olmasını istiyoruz
                    numColumns={2}
                    // Her bir sütunun container style'ı
                    columnWrapperStyle={styles.columnWrapperStyle}
                    // FlatList'in içindeki her şeyi kapsayan container style'ı
                    contentContainerStyle={styles.contentContainerStyle}
                />
            </View>
        </View>
    )
}

export default HomeScreen;
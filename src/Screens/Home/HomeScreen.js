import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import Modal from 'react-native-modal';

import CitySelectionButton from '../../Components/CitySelectionButton';
import Title from '../../Components/Title';
import CategoryItem from './Components/CategoryItem';
import CitySelectionModal from './Components/CitySelectionModal';

import getCategories from '../../API/Categories/ApiRequests';

import styles from './Styles/HomeScreenStyles';
import { useSelector } from 'react-redux';
import { categoryListSelector } from '../../Redux/CategoryRedux';

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

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null)

    const categories = useSelector(categoryListSelector);

    const _onPress_GoToRestaurants = () => {
        props.navigation.navigate("restaurants-screen");
    }

    const _onPress_CitySelectionModal = () => {
        setIsModalVisible(true);
    }

    const _onPress_ModalBackdrop = ()=> {
        setIsModalVisible(false);
    }

    const _onPress_CategoryItem = categoryItem => {
        console.log(categoryItem);
        // ******************
        // React Navigation'da başka bir ekrana navigate ederken
        // Bu şekilde navigasyon parametreleri gönderebiliyoruz
        props.navigation.navigate("restaurants-screen", {
            city: selectedCity,
            category: categoryItem,
        });
        // ******************
    }

    const _onPress_CityItem = (city) => {
        setIsModalVisible(false);
        setSelectedCity(city);
    }

    const _renderCategoryItem = ({item}) => {
        return (
            <CategoryItem
                onPress={() => _onPress_CategoryItem(item)}
                text={item.name}
                disabled={selectedCity === null} />
        )
    }

    const EmptyComponent = props => {
        return <Text>Boş</Text>
    }




    return (
        <>
            <View style={styles.container}>
                <View style={styles.citySelectionButtonContainer}>
                    {/* CitySelectionButton */}
                    <CitySelectionButton cityName={selectedCity?.name} onPress={_onPress_CitySelectionModal}/>
                </View>
                <View style={styles.titleContainer}>
                    {/* Title */}
                    <Title text="Kategoriler" />
                </View>
                <View style={styles.flatListContainer}>
                    {/* CategoryList */}
                    <FlatList
                        ListEmptyComponent={EmptyComponent}
                        // Render edilecek itemlerin listesi (array)
                        data={categories}
                        // Her bir itemin nasıl render edileceği (fonksiyon)
                        renderItem={_renderCategoryItem}
                        // Her bir itemin 'key'sinin ne olacağı (fonksiyon)
                        keyExtractor={item => item.id}
                        // İki sütun olmasını istiyoruz
                        numColumns={2}
                        style={styles.flatList}
                        // Her bir sütunun container style'ı
                        columnWrapperStyle={styles.columnWrapperStyle}
                        // FlatList'in içindeki her şeyi kapsayan container style'ı
                        contentContainerStyle={styles.contentContainerStyle}
                    />
                </View>
                
            </View>
            <Modal
                isVisible={isModalVisible}
                // arkaplana tıklayınca fonksiyonu
                onBackdropPress={_onPress_ModalBackdrop}
                style={styles.modal}
                // açılış animasyonu
                animationIn="fadeIn"
                // kapanış animasyonu
                animationOut="fadeOut"
            >
                <CitySelectionModal onPress_CityItem={_onPress_CityItem} />
            </Modal>
        </>
    )
}

export default HomeScreen;
import React from 'react';
import { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import Modal from 'react-native-modal';

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

    const [isModalVisible, setIsModalVisible] = useState(false);

    const _onPress_GoToRestaurants = () => {
        props.navigation.navigate("restaurants-screen");
    }

    const _onPress_CitySelectionModal = () => {
        setIsModalVisible(true);
    }

    const _onPress_ModalBackdrop = ()=> {
        setIsModalVisible(false);
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
        <>
            <View style={styles.container}>
                <View style={styles.citySelectionButtonContainer}>
                    {/* CitySelectionButton */}
                    <CitySelectionButton onPress={_onPress_CitySelectionModal}/>
                </View>
                <View>
                    {/* Title */}
                    <Title text="Kategoriler" />
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
                        keyExtractor={(item, index) => item.categoryId}
                        // İki sütun olmasını istiyoruz
                        numColumns={2}
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
                animationIn="bounceIn"
                // kapanış animasyonu
                animationOut="bounceOut"
                // açılış animasyon süresi
                animationInTiming={1000}
                // kapanış animasyon süresi
                animationOutTiming={3000}
                // açılış arkaplan kararma süresü
                backdropTransitionInTiming={3000}
                // arkaplan rengi
                backdropColor={'pink'}
                // arkaplan opaklık
                backdropOpacity={0.8}
            >
                <View style={styles.modalContentContainer}>

                </View>
            </Modal>
        </>
    )
}

export default HomeScreen;
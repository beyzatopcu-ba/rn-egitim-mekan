import React from 'react';
import {View, FlatList, Text} from 'react-native';

import styles from '../Styles/CitySelectionModalStyles';

const dummyCityList = [
    {
        cityId: 1,
        cityName: 'İstanbul',
    },
    {
        cityId: 2,
        cityName: 'İzmir',
    },
    {
        cityId: 3,
        cityName: 'Ankara',
    },
]

const CitySelectionModal = props => {

    const _renderCityItem = ({item}) => {
        return (
            <Text style={styles.cityNameText}>{item.cityName}</Text>
        )
    }

    const CityListSeparator = props => {
        return (
            <View style={styles.separator} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={dummyCityList}
                renderItem={_renderCityItem}
                keyExtractor={(item,index) => item.cityId}
                ItemSeparatorComponent={CityListSeparator}
            />
        </View>
    );
}

export default CitySelectionModal;
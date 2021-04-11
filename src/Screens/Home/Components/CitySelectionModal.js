import React, { useState } from 'react';
import {View, FlatList, Text} from 'react-native';
import OkayButton from '../Components/OkayButton';

import SearchBar from '../../../Components/SearchBar';

import styles from '../Styles/CitySelectionModalStyles';
import getCities from '../../../API/Cities/ApiRequests';

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

    const [searchText, setSearchText] = useState('');
    const [cityList, setCityList] = useState([]);

    const _onPress_Search = () => {
        /*
        getCategories()
            .then(categoryList => {
                setCategories(categoryList);
            })
            .catch(error => {
                console.log(error);
            })
            */
        getCities(searchText)
            .then(cityList => {
                setCityList(cityList);
            })
            .catch(error => console.log(error));
    };

    const _renderCityItem = ({item}) => {
        return (
            <Text style={styles.cityNameText}>{item.name}</Text>
        )
    }

    const CityListSeparator = props => {
        return (
            <View style={styles.separator} />
        )
    }

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Şehir arayın…"
                onChangeText={setSearchText}
                value={searchText} />
            <OkayButton onPress={_onPress_Search}/>
            <FlatList
                data={cityList}
                renderItem={_renderCityItem}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent={CityListSeparator}
            />
        </View>
    );
}

export default CitySelectionModal;
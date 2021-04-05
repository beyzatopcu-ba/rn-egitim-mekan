import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import AxiosBase from '../../API/AxiosConfig';

const ProfileScreen = props => {

    const [userList, setUserList] = useState([]);
    const [randomUser, setRandomUser] = useState(null);

    useEffect(async () => {
        // componentDidMount
        // yani Component ilk render'ını tamamladıktan sonra çalışacak kodlar
        // bunu sağlamak için, dependencyArray'e [] verdik.

        /*
        AxiosBase.get('users')
            .then(response => {
                const users = response.data.data;
                setUserList(users);
            })
            .catch(error => {
                console.log(error);
            })
            */
        let response = await AxiosBase.get('users');
        setUserList(response.data.data);

        

    }, []);

    const _renderUserItem = ({item: user}) => {
        return (
            <Text>{user.firstName + " " + user.lastName}</Text>
        )
    }

    const _onPress_RandomPerson = () => {
        const randomNumber = Math.floor(Math.random() * (25 - 1) + 1);


        AxiosBase.get('users/'+randomNumber)
            .then(response => {
                const user = response.data;
                setRandomUser(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList 
                data={userList}
                renderItem={_renderUserItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity onPress={_onPress_RandomPerson}>
                <Text>Rasgele Kişi getir</Text>
            </TouchableOpacity>
            <Text>{randomUser ? randomUser.firstName + " " + randomUser.lastName : null}</Text>
        </View>
    )
}

export default ProfileScreen;
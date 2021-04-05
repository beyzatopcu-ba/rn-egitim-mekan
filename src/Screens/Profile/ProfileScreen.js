import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import AxiosBase from '../../API/AxiosConfig';

const ProfileScreen = props => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        // componentDidMount
        // yani Component ilk render'ını tamamladıktan sonra çalışacak kodlar
        // bunu sağlamak için, dependencyArray'e [] verdik.

        AxiosBase.get('users')
            .then(response => {
                const users = response.data.data;
                setUserList(users);
            })
            .catch(error => {
                console.log(error);
            })

    }, []);

    const _renderUserItem = ({item: user}) => {
        return (
            <Text>{user.firstName + " " + user.lastName}</Text>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList 
                data={userList}
                renderItem={_renderUserItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ProfileScreen;
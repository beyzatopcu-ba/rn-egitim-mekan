import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import AxiosBase from '../../API/AxiosConfig';

const notes = [
    {
        id: 1,
        title: "Dolore adipisicing dolor",
        content: "Sunt tempor eu tempor pariatur enim. Irure pariatur dolore magna voluptate id nisi nostrud consequat. Elit consequat anim aliquip in Lorem do officia magna veniam non aliquip laborum voluptate. Occaecat amet in exercitation amet tempor duis magna enim ipsum irure cillum. Dolore deserunt quis aliquip labore excepteur velit dolor ipsum non. Et cupidatat est excepteur duis excepteur nisi excepteur.",
        color: "#BFFF80",
        date: '05.12.2020',
    },
    {
        id: 2,
        title: "Veniam Lorem aute nulla ex.",
        content: "Sunt tempor eu tempor",
        color: "#FF6CA5",
        date: '09.06.2021',
    },
    {
        id: 3,
        title: "Aliquip veniam aliqua exercitation eiusmod cillum occaecat.",
        content: "Proident excepteur sit magna veniam nulla mollit elit eiusmod. Voluptate reprehenderit nostrud commodo occaecat cillum incididunt cillum velit consectetur incididunt fugiat.",
        color: "#80FFD8",
        date: '01.07.2019',
    },
    {
        id: 4,
        title: "Voluptate reprehenderit nostrud",
        content: "Proident.",
        color: "#FFC834",
        date: '13.10.2020',
    },
    {
        id: 5,
        title: "Dolore adipisicing dolor",
        content: "Sunt tempor eu tempor pariatur enim. Irure pariatur dolore magna voluptate id nisi nostrud consequat. Elit consequat anim aliquip in Lorem do officia magna veniam non aliquip laborum voluptate. Occaecat amet in exercitation amet tempor duis magna enim ipsum irure cillum. Dolore deserunt quis aliquip labore excepteur velit dolor ipsum non. Et cupidatat est excepteur duis excepteur nisi excepteur.",
        color: "#FF6CA5",
        date: '27.05.2020',
    },
];

const ProfileScreen = props => {

    const [userList, setUserList] = useState([]);
    const [randomUser, setRandomUser] = useState(null);

    // Notlar için useEffect
    useEffect(async () => {
        for (let i = 0; i < notes.length; i++) {
            await AxiosBase.post('notes', notes[i]);
            console.log('posted', notes[i]);
        }

        console.log('posted all notes');

        // Bu noktada notlar aşağıdaki URL'den çekilip işlem yapılabilir
        // "https://rem-rest-api.herokuapp.com/api/notes"

    }, []);

    useEffect(async () => {
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

        /*
         let response = await AxiosBase.get('users');
         setUserList(response.data.data);
        */



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

    // Hata ile karşılaşmak için yanlış işlem
    const _onPress_RandomPerson_Wrong = () => {

        fetch('https://rem-rest-api.herokuapp.com/api/users/100')
            .then(response => {
                console.log('response >>> ', response)
            })
            .catch(error => {
                console.log('error >>> ', error);
            });

            /*
        AxiosBase.get('users/100')
            .then(response => {
                console.log('response >>> ', response)
            })
            .catch(error => {
                console.log('error >>> ', error);
            })
            */
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
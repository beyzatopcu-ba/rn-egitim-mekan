import React from 'react';

import { TextInput, View } from 'react-native';

import BorderedBox from './BorderedBox';

import Colors from '../Constants/Colors';
import styles from './Styles/SearchBarStyles';

const SearchBar = props => {
    return (
        <BorderedBox borderColor={Colors.mainColor}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    autoCorrect={false}
                    placeholder={props.placeholder}
                    placeholderTextColor={Colors.lightGrey} />
            </View>
        </BorderedBox>
    );
};

export default SearchBar;

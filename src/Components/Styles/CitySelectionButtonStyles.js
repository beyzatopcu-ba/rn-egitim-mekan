import { StyleSheet } from 'react-native';
import {Colors, Fonts, Metrics} from '../../Constants';

export default StyleSheet.create({
    touchable: {
        height: Metrics.width * 0.12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.mainColor,
        borderWidth: 1,
        borderRadius: Metrics.borderRadius,
    },
    text: {
        fontSize: Fonts.Sizes.eighteen,
        fontFamily: Fonts.Families.regular,
    },
});
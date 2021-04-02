import { StyleSheet } from 'react-native';
import {Colors, Fonts, Metrics} from '../../../Constants';

export default StyleSheet.create({
    container: {
        height: Metrics.width * 0.12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.lightGrey,
        borderWidth: 1,
        borderRadius: Metrics.borderRadius,
        flex: 0.48,
    },
    text: {
        fontSize: Fonts.Sizes.sixteen,
        fontFamily: Fonts.Families.regular,
        color: Colors.lightGrey,
        marginHorizontal: Metrics.width * 0.03,
    },
});
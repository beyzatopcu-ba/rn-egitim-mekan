import { StyleSheet } from 'react-native';
import {Colors, Fonts, Metrics} from '../../../Constants';

export default StyleSheet.create({
    container: {
        width: Metrics.width * 0.8,
        height: Metrics.height * 0.6,
        borderRadius: Metrics.borderRadius,
        backgroundColor: 'white',
        padding: Metrics.width * 0.05,
    },
    cityNameText: {
        fontFamily: Fonts.Families.regular,
        fontSize: Fonts.Sizes.eighteen,
        color: 'black',
        paddingLeft: Metrics.width * 0.02
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        width: '100%',
        backgroundColor: Colors.lightGrey,
        marginVertical: Metrics.width * 0.02,
    },
});
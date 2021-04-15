import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../Constants'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: Metrics.width * 0.05,
    },
    imageContainer: {
        width: Metrics.width * 0.2,
        height: undefined,
        aspectRatio: 1,
    },
    midContainer: {
        flexGrow: 1,
        flexShrink: 1,
        paddingLeft: Metrics.width * 0.03,
        paddingRight: Metrics.width * 0.05,
        paddingVertical: Metrics.width * 0.01,
        justifyContent: 'space-between',
    },
    rightContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: Metrics.borderRadius,
    },
    nameText: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.sixteen,
        color: 'black',
    },
    locationText: {
        fontFamily: Fonts.Families.regular,
        fontSize: Fonts.Sizes.fourteen,
        color: 'black',
    },
    cuisinesText: {
        fontFamily: Fonts.Families.regular,
        fontSize: Fonts.Sizes.twelve,
        color: Colors.grey,
    },
    ratingText: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.sixteen,
        color: Colors.mainColor,
    },
    heartIconContainer: {
        width: Metrics.width * 0.06,
        height: undefined,
        aspectRatio: 1,
    },
    heartEmptyIcon: {
        color: Colors.grey,
    },
    heartFilledIcon: {
        color: Colors.mainColor,
    }
});

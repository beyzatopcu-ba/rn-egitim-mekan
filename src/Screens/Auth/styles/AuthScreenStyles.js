import { StyleSheet } from 'react-native';
import Colors from '../../../Constants/Colors';
import Fonts from '../../../Constants/Fonts';
import Metrics from '../../../Constants/Metrics';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.mainColor,
    },
    keyboardAvoiding: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: Metrics.width * 0.03,
        paddingHorizontal: Metrics.marginHorizontal,
    },
    loadingOverlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        width: Metrics.width,
        height: Metrics.height,
        zIndex: 1,
        justifyContent: 'center',
    },
    appLogoContainer: {
        alignItems: 'center',
        flex: 0.75,
    },
    inputsContainer: {
        minHeight: Metrics.width * 0.5,
        justifyContent: 'center',
    },
    buttonsContainer: {
        justifyContent: 'center',
    },
    appNameContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        width: undefined,
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    inputContainer: {
        marginVertical: Metrics.width * 0.02,
    },
    signupTouchable: {
        alignItems: 'center',
        marginTop: Metrics.width * 0.02,
    },
    signupText: {
        fontFamily: Fonts.Families.semibold,
        fontSize: Fonts.Sizes.eighteen,
        color: 'white',
    },
    appNameText: {
        fontFamily: Fonts.Families.logo,
        fontSize: Fonts.Sizes.authlogo,
        color: 'white',
    },
});

export default styles;

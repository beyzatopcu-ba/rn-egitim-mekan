import { StyleSheet } from 'react-native';
import Colors from '../../../Constants/Colors';
import Fonts from '../../../Constants/Fonts';
import Metrics from '../../../Constants/Metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Metrics.marginHorizontal,
        backgroundColor: 'white',
    },
    emailContainer: {
        marginBottom: Metrics.width * 0.05,
    },
    emailText: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.sixteen,
    },
    signOutButtonContainer: {


    },
    signOutTouchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signOutText: {
        fontFamily: Fonts.Families.regular,
        fontSize: Fonts.Sizes.eighteen,
    },
    loadingOverlay: {

    },
});

export default styles;

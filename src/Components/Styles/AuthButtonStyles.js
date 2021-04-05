import {StyleSheet} from 'react-native';
import Fonts from '../../Constants/Fonts';

const styles = StyleSheet.create({
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.eighteen,
    },
});

export default styles;

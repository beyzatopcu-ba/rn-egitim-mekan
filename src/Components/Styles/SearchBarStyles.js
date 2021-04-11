import { StyleSheet } from 'react-native';
import Fonts from '../../Constants/Fonts';
import Metrics from '../../Constants/Metrics';

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        paddingHorizontal: Metrics.textMargin,
    },
    input: {
        flex:1,
        fontSize: Fonts.Sizes.eighteen,
        fontFamily: Fonts.Families.regular,
    },
});

export default styles;

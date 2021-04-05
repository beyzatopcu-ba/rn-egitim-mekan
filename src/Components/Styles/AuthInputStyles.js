import { StyleSheet } from 'react-native';
import Fonts from '../../Constants/Fonts';
import Metrics from '../../Constants/Metrics';

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        paddingHorizontal: Metrics.textMargin,
        backgroundColor: 'rgba(255,255,255,0.15)',
    },
    input: {
        flex:1,
        fontSize: Fonts.Sizes.eighteen,
        fontFamily: Fonts.Families.regular,
        color: 'white',
    },
});

export default styles;

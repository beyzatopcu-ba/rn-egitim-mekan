import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: Metrics.marginHorizontal,
    },
    citySelectionButtonContainer: {
        marginVertical: Metrics.width * 0.05,
    },
    titleContainer: {
        marginBottom: Metrics.width * 0.05,
    },
});

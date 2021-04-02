import {StyleSheet} from 'react-native';
import { Metrics } from '../../../Constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: Metrics.marginHorizontal,
        backgroundColor: 'white',
    },
    citySelectionButtonContainer: {
        marginVertical: Metrics.width * 0.05,
    },
    columnWrapperStyle: {
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
        marginVertical: Metrics.width * 0.015,
    },
    contentContainerStyle: {
        marginTop: Metrics.width * 0.035,
    }
});

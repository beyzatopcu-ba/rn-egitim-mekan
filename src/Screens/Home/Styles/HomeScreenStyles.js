import {StyleSheet} from 'react-native';
import { Metrics } from '../../../Constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: Metrics.marginHorizontal,
        backgroundColor: 'white',
    },
    citySelectionButtonContainer: {
        paddingVertical: Metrics.width * 0.05,
    },
    titleContainer: {

    },
    flatListContainer: {
        flexGrow: 1,
        paddingTop: Metrics.width * 0.05,
    },
    flatList: {
        flex: 1,
    },
    columnWrapperStyle: {
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
        paddingBottom: Metrics.width * 0.03,
    },
    contentContainerStyle: {
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

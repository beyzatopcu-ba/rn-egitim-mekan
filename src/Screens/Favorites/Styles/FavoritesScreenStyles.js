import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Metrics.marginHorizontal,
    },
    noteContainer: {
        marginVertical: Metrics.width * 0.02,
        borderLeftWidth: Metrics.width * 0.01,
        borderRadius: Metrics.width * 0.005,
        paddingLeft: Metrics.width * 0.03,
    },
    noteTopContainer: {
        flexDirection: 'row',
    },
    noteBottomContainer: {

    },
    titleText: {
        flexGrow: 1,
        flexShrink: 1,
    },
    dateText: {

    },
    contentText: {

    }
});

const getNoteContainerStyles = color => {
    return [
        styles.noteContainer,
        { borderColor: color },
    ]
}

export default {
    ...styles,
    getNoteContainerStyles,
};

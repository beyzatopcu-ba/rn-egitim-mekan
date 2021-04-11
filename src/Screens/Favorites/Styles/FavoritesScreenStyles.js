import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Metrics.marginHorizontal,
        backgroundColor: 'white',
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

    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContentContainer: {
        width: Metrics.width * 0.8,
        height: Metrics.height * 0.6,
        borderRadius: Metrics.borderRadius,
        backgroundColor: 'white',
        padding: Metrics.width * 0.05,
    },
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
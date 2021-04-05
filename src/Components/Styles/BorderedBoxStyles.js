import { StyleSheet } from 'react-native';

import Metrics from '../../Constants/Metrics';

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderWidth: 1,
    },
    normalHeight: {
        height: Metrics.width * 0.12,
    },
    tallHeight: {
        height: Metrics.width * 0.2,
    },
});

export default styles;
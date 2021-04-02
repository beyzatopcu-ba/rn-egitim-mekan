import Metrics from '../../Constants/Metrics';
import Fonts from '../../Constants/Fonts';

export default {
    labelStyle: {
        fontSize: Metrics.width * 0.04,
        fontWeight: '600',
        fontFamily: Fonts.Families.semibold,
    },
    style: {
        backgroundColor: '#DE6F35',
    },
    tabStyle: {
        justifyContent: 'center',
    },
    activeTintColor: 'white',
    inactiveTintColor: 'rgba(255,255,255,0.5)',
};
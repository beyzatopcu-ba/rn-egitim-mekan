import { Metrics, Fonts, Colors } from '../../Constants';

export default {
    labelStyle: {
        fontSize: Metrics.width * 0.04,
        fontWeight: '600',
        fontFamily: Fonts.Families.semibold,
    },
    style: {
        backgroundColor: Colors.mainColor,
    },
    tabStyle: {
        justifyContent: 'center',
    },
    activeTintColor: 'white',
    inactiveTintColor: 'rgba(255,255,255,0.5)',
};
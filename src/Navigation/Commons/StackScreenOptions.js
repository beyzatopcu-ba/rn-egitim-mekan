
import HeaderBackImage from '../../Components/HeaderBackImage';
import Fonts from '../../Constants/Fonts';
import Metrics from '../../Constants/Metrics';

export default {
    headerTitleStyle: {
        color: '#DE6F35',
        fontFamily: Fonts.Families.bold,
        fontWeight: '800',
        fontSize: Metrics.width * 0.045,
    },
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerBackImage: HeaderBackImage,
};
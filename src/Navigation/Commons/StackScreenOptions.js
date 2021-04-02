
import HeaderBackImage from '../../Components/HeaderBackImage';
import { Metrics, Fonts, Colors } from '../../Constants';

export default {
    headerTitleStyle: {
        color: Colors.mainColor,
        fontFamily: Fonts.Families.bold,
        fontWeight: '800',
        fontSize: Metrics.width * 0.045,
    },
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerBackImage: HeaderBackImage,
};
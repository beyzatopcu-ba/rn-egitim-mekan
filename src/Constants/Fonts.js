import Metrics from './Metrics';

const Sizes = {
    twelve: Metrics.width * 0.033,
    fourteen: Metrics.width * 0.037,
    sixteen: Metrics.width * 0.041,
    eighteen: Metrics.width * 0.045,
    twenty: Metrics.width * 0.049,
    authlogo: Metrics.width * 0.075,
};


const Families = {
    extralight: 'Nunito-ExtraLight',
    light: 'Nunito-Light',
    regular: 'Nunito-Regular',
    semibold: 'Nunito-SemiBold',
    bold: 'Nunito-Bold',
    extrabold: 'Nunito-ExtraBold',
    black: 'Nunito-Black',
    logo: 'Righteous-Regular',
};

export default {
    Families,
    Sizes
}

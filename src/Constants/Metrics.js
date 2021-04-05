import {Dimensions} from 'react-native';

let windowSize = Dimensions.get('window');
export const width = windowSize.width;
export const height = windowSize.height;

export default {
    width,
    height,
    marginHorizontal: width * 0.05,
    borderRadius: 8,
    textMargin: width * 0.03,
};
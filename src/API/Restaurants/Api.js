import ApiURLs from '../ApiURLs';
import AxiosBase from '../AxiosConfig';

import RestaurantConverter from './RestaurantConverter';

const searchRestaurantsByCityAndCategory = async (cityId, categoryId) => {
    let urlWithParams = ApiURLs.SEARCH_RESTAURANTS
        + '?'
        + 'entity_id=' + cityId
        + '&entity_type=city&category=' + categoryId
        + '&sort=rating';

    let result = await AxiosBase
        .get(urlWithParams)
        .then(response => {
            return RestaurantConverter.convert(response);
        })
        .catch(error => {
            console.log('error', error);
        });

    return result;
};

export default {
    searchRestaurantsByCityAndCategory,
};

import ApiURLs from '../ApiURLs';
import Axios from '../AxiosConfig';
import cityConverter from './CityConverter';

const getCities = async (searchText) => {
    /*
    const response = await Axios.get(ApiURLs.GET_CATEGORIES);
    const categoryList = categoryConverter(response.data);

    return categoryList;
    */
    const urlWithParams = ApiURLs.GET_CITIES + '?q=' + searchText;
    const response = await Axios.get(urlWithParams);
    const cityList = cityConverter(response.data);

    return cityList;
};


export default getCities;
import ApiURLs from '../ApiURLs';
import Axios from '../AxiosConfig';

const getCities = async (searchText) => {
    const urlWithParams = ApiURLs.GET_CITIES + '?q=' + searchText;
    // Axios.get(urlWithParams)
};


export default getCities;
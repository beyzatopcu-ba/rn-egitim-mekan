import ApiURLs from '../ApiURLs';
import Axios from '../AxiosConfig';
import categoryConverter from './CategoryConverter';

const getCategories = async () => {
    const response = await Axios.get(ApiURLs.GET_CATEGORIES);
    const categoryList = categoryConverter(response.data);

    return categoryList;
};


export default getCategories;
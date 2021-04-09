import Axios from 'axios';
import ApiURLs from './ApiURLs';

const axiosInstance = Axios.create({
    baseURL: ApiURLs.BASE_URL,
    timeout: 3000,
    headers: {
        'Accept': 'application/json',
        'user-key': '1feef3132ed9ef075e3bcfda456e8a8c',
    },
});

export default axiosInstance;
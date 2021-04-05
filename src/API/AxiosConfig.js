import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: "https://rem-rest-api.herokuapp.com/api/",
    headers: {
        'Accept': 'application/json',
    },
});

export default axiosInstance;
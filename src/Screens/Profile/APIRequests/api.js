import AxiosBase from '../../../API/AxiosConfig';

export const requestWithFetch =  async () => {
    console.log('>>>>>>>> API ISTEĞI')
    fetch('https://rem-rest-api.herokuapp.com/api/users')
        .then(response => {
            console.log('SAF RESPONSE', response);
            return response.json();
        })
        .then(jsonResponse => {
            console.log('JSON RESPONSE', jsonResponse)
        })
        .catch(error => {
            console.log(error);
        })

    let users = await fetch('https://rem-rest-api.herokuapp.com/api/users');
}

export const requestWithAxios = () => {
    AxiosBase.get('users')
        .then(response => {
            console.log('SAF RESPONSE', response);
            console.log('DATA', response.data)
        })
        .catch(error => {
            console.log(error);
        });
}
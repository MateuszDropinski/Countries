import axios from 'axios';

const ROOT_URL = "https://restcountries.eu/rest/v2/name/";

export const ADD_COUNTRY = 'ADD_COUNTRY';
export const BAD_URL = 'BAD_URL';

export function addCountry(country)
{
    const url = `${ROOT_URL}${country}`;
    
    /*return axios.get(url)
        .then(response => {return {
            type:ADD_COUNTRY,
            payload:response
        }})
        .catch(error => {return {
            type: BAD_URL,
            payload: error
        }})*/
    const request = axios.get(url);
    
    return {
        type: ADD_COUNTRY,
        payload:request
    }
}
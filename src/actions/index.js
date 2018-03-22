import axios from 'axios';

const ROOT_URL = "https://restcountries.eu/rest/v2/name/";

export const COUNTRY_FOUND = 'COUNTRY_FOUND';
export const LOOKING_FOR_COUNTRY = 'LOOKING_FOR_COUNTRY';
export const BAD_URL = 'BAD_URL';

export function getDataRequest() {
    return {
        type: LOOKING_FOR_COUNTRY
    }
}

export function getDataDone(data)
{
    return {
        type: COUNTRY_FOUND,
        payload: data.data
    }
}

export function getDataFailed(error)
{
    return {
        type: BAD_URL,
        payload: error
    }
}

export function addCountry(country)
{
    const url = `${ROOT_URL}${country}`;
    
    return dispatch =>
    {
        dispatch(getDataRequest());
        
        axios.get(url)
            .then(data => {dispatch(getDataDone(data))})
            .catch(error => {dispatch(getDataFailed(error))})
    }    
}


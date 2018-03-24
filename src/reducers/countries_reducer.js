import * as actions from './../actions';

export default function(state = {countries:[],isLoading:false,error:""}, action)
{
    switch (action.type)
    {
        case actions.LOOKING_FOR_COUNTRY:
            return {
                countries: [...state.countries],
                isLoading: true,
                error: ""
            };
        case actions.COUNTRY_FOUND:
            {
                let {name, flag, population, area, capital} = action.payload[0];
                let newCountry = {name,flag,population,area,capital};
                
                for(let country of state.countries) 
                {
                    if(country.name === newCountry.name)
                    return {
                        countries: [...state.countries],
                        isLoading: false,
                        error: "Country is on the list."
                    };
                }
                return {
                    countries: [...state.countries, newCountry],
                    isLoading: false,
                    error: ""
                };
            }            
        case actions.BAD_URL:
            return {
                countries: [...state.countries],
                isLoading: false,
                error: "Country not found."
            };
        default:
            return state;
    }
}
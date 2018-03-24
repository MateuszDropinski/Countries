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
                for(let country of state.countries) 
                {
                    if(country.name === action.payload[0].name)
                    return {
                        countries: [...state.countries],
                        isLoading: false,
                        error: "Country is on the list."
                    };
                }
                return {
                    countries: [...state.countries, action.payload[0]],
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
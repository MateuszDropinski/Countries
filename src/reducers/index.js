import { combineReducers } from 'redux';
import CountriesReducer from './countries_reducer';

const rootReducer = combineReducers({
    countries: CountriesReducer
});

export default rootReducer;
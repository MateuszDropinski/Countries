import { combineReducers } from 'redux';
import CountriesReducer from './countries_reducer';

const rootReducer = combineReducers({
    data: CountriesReducer
});

export default rootReducer;
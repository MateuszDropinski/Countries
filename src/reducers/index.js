import { combineReducers } from 'redux';
import CountriesReducer from './countries_reducer';
import SortingReducer from './sorting_reducer';

const rootReducer = combineReducers({
    data: CountriesReducer,
    sort: SortingReducer
});

export default rootReducer;
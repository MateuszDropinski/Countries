import * as actions from './../actions';

export default function(state = {name: "name", direction: "asc"}, action)
{
    switch (action.type)
    {
        case actions.SORT_COUNTRIES:
            if(action.payload === state.name){
                let direction = (state.direction === "asc") ? "desc" : "asc";
                return {
                    name: action.payload, 
                    direction
                }
            }            
            else
                return {
                    name: action.payload, 
                    direction: "asc"
                }
        default:
            return state;
    }
}
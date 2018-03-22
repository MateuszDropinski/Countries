import { ADD_COUNTRY, BAD_URL } from './../actions';

export default function(state = [], action)
{
    switch (action.type)
    {
        case ADD_COUNTRY:
            console.log(action.payload);
            return [...state, action.payload.data[0]];
        case BAD_URL:
            return [...state];
    }
    return state;
}
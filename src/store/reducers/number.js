import { GET_NUMBER } from '../actions/actionsTypes';

const initialState = {
    value: 0
}

export default function(state = initialState, action) {
    if (action.type === GET_NUMBER){
        return {
            ...state,
            value: action.payload,
        }
    }
    return state
}

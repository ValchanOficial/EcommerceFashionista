import { GET_TOTAL_ITEMS, GET_NUMBER } from '../actions/actionsTypes';

const initialState = {
    list: [],
    total: 0.0,
    number: 0
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_TOTAL_ITEMS:
            return {
               ...state,
               total: action.payload
            }
        case GET_NUMBER:
            return {
                ...state,
                number: action.payload
            }
        default:
            return state
    }
}

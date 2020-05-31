import { GET_DRAWER_STATUS, GET_DRAWER_TYPE } from '../actions/actionsTypes';

const initialState = {
    status: false,
    search: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_DRAWER_STATUS:
            return {
               ...state,
               status: action.payload
            }
        case GET_DRAWER_TYPE:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state
    }
}

import { ADD_ITEM_LIST, REMOVE_ITEM_LIST } from '../actions/actionsTypes';

const initialState = {
    list: [],
    total: 0.0,
    number: 0
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_LIST:
            return {
                ...state,
                list: action.payload.list,
                total: action.payload.total,
                number: action.payload.number
            }
        case REMOVE_ITEM_LIST:
            return {
                ...state,
                list: action.payload.list,
                total: action.payload.total,
                number: action.payload.number
            }
        default:
            return state
    }
}

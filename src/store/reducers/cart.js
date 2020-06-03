import { ADD_ITEM_LIST, REMOVE_ITEM_LIST, CHANGE_CONTEXT } from '../actions/actionsTypes';

const initialState = {
    list: [],
    total: 0.0,
    number: 0,
    context: ''
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
        case CHANGE_CONTEXT:
            return {
                ...state,
                context: action.payload.context
            }
        default:
            return state
    }
}

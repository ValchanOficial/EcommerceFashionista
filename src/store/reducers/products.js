import { GET_PRODUCT, GET_PRODUCTS, GET_FILTERED_PRODUCTS } from '../actions/actionsTypes';

const initialState = {
    product: {},
    products: [],
    list: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case GET_PRODUCTS:
            return {
               ...state,
               products: action.payload
            }
        case GET_FILTERED_PRODUCTS:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}

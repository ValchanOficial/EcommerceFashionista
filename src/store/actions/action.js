import { GET_PRODUCTS, GET_NUMBER, GET_FILTERED_PRODUCTS } from './actionsTypes';

export const setProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export const setNumber = (number) => {
    return {
        type: GET_NUMBER,
        payload: number
    }
}

export const filterList = (name, list) => {
    return {
        type: GET_FILTERED_PRODUCTS,
        payload: list.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
    }
}
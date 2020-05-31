import { 
    GET_PRODUCTS,
    GET_TOTAL_ITEMS,
    GET_FILTERED_PRODUCTS,
    GET_DRAWER_STATUS,
    GET_DRAWER_TYPE
} from './actionsTypes';

export const setProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export const setNumber = (number) => {
    return {
        type: GET_TOTAL_ITEMS,
        payload: number
    }
}

export const filterList = (name, list) => {
    return {
        type: GET_FILTERED_PRODUCTS,
        payload: /^ *$/.test(name) ? [] : list.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
    }
}

export const statusDrawer = (status) => {
    return {
        type: GET_DRAWER_STATUS,
        payload: status
    }
}

export const setStatus = (status) => {
    return {
        type: GET_DRAWER_STATUS,
        payload: status
    }
}

export const setType = (status) => {
    return {
        type: GET_DRAWER_TYPE,
        payload: !status
    }
}


// localStorage.setItem('@EcommerceFashionista:products', JSON.stringify(products));
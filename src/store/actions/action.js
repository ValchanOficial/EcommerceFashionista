import {
    GET_PRODUCT,
    GET_PRODUCTS,
    GET_TOTAL_ITEMS,
    GET_FILTERED_PRODUCTS,
    GET_DRAWER_STATUS,
    GET_DRAWER_TYPE
} from './actionsTypes';

export const setProducts = (products) => {
    localStorage.setItem('@EcommerceFashionista:products', JSON.stringify(products));
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export const getProduct = (code_color) => {
    const products = JSON.parse(localStorage.getItem('@EcommerceFashionista:products'));
    localStorage.setItem('@EcommerceFashionista:code', JSON.stringify(code_color));
    const product = products.find(el => el.code_color === code_color);  
    
    return {
        type: GET_PRODUCT,
        payload: product
    }
}

export const setNumber = (add) => {
    return {
        type: GET_TOTAL_ITEMS,
        payload: add ? +1 : -1
    }
}

export const filterList = (name) => {
    const products = JSON.parse(localStorage.getItem('@EcommerceFashionista:products'));
    return {
        type: GET_FILTERED_PRODUCTS,
        payload: /^ *$/.test(name) ? [] : products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
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
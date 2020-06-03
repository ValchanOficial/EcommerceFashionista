import {
    GET_PRODUCT,
    GET_PRODUCTS,
    GET_FILTERED_PRODUCTS,
    GET_DRAWER_STATUS,
    GET_DRAWER_TYPE,
    ADD_ITEM_LIST,
    REMOVE_ITEM_LIST,
    CHANGE_CONTEXT
} from './actionsTypes';

const getTotal = (list) => {
    return list.reduce((total, { price, amount }) => 
    total + Number(price.replace('R$', '').replace(',', '.')) * amount, 0)
    .toFixed(2);
}

const getTotalAmount = (list) => list.reduce((total, { amount }) => total + amount, 0);

const containsDuplicatedToAdd = (list, product, size, productSelected) => {
    const index = list.findIndex(el => el.code_color === product.code_color && el.size === size);
    if(index !== -1){
        list[index].amount += 1
        return [...list];
    }
    return [...list, productSelected];
}

const containsDuplicatedToRemove = (list, product, size) => {
    const index = list.findIndex(el => el.code_color === product.code_color && el.size === size);
    if(index !== -1) {
        list[index].amount === 1 ? list.splice(index, 1) : list[index].amount -= 1;
        return [...list];
    }
    return [...list];
}

const addProduct = (product, list, size) => {
    const productSelected = {
        image: product.image,
        name: product.name,
        code_color: product.code_color,
        size,
        price: product.on_sale ? product.actual_price : product.regular_price,
        installments: product.installments,
        amount: 1
    }
    return containsDuplicatedToAdd(list, product, size, productSelected)
}

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

export const setAddToWishList = (product, list, size) => {
    const listValue = addProduct(product, list, size);
    return {
        type: ADD_ITEM_LIST,
        payload: {
            list: listValue,
            number: getTotalAmount(listValue),
            total: getTotal(listValue)
        }
    }
}

export const setRemoveOneFromWishList = (product, list, size) => {
    const listValue = containsDuplicatedToRemove(list, product, size);
    return {
        type: REMOVE_ITEM_LIST,
        payload: {
            list: listValue,
            number: getTotalAmount(listValue),
            total: getTotal(listValue)
        }
    }
}

export const setRemoveFromWishList = (product, list) => {
    const listValue = list.filter(el => el !== product);
    return {
        type: REMOVE_ITEM_LIST,
        payload: {
            list: listValue,
            number: getTotalAmount(listValue),
            total: getTotal(listValue)
        }
    }
}

export const setContextValue = (context) => {
    return {
        type: CHANGE_CONTEXT,
        payload: {
            context
        }
    }
}
import {
    ADD_ITEM_TO_CART,
    CLEAR_CART,
    GET_ITEMS_FROM_CART,
    REMOVE_ALL_ITEMS_FROM_CART,
    REMOVE_ITEM_FROM_CART
} from "./types";


const getItemsFromCart = () => {
    return {
        type: GET_ITEMS_FROM_CART
    }
};

const addItemToCart = (product) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: product
    };
};

const removeItemFromCart = product => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: product
    };
};

const removeItemsFromCart = id => {
    return {
        type: REMOVE_ALL_ITEMS_FROM_CART,
        payload: id,
    };
};

const clearCart = () => {
    return {
        type: CLEAR_CART
    };
};

export  {
    getItemsFromCart,
    addItemToCart,
    removeItemFromCart,
    removeItemsFromCart,
    clearCart
};
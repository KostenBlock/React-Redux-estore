import {
    ADD_ITEM_TO_CART,
    CLEAR_CART,
    GET_ITEMS_FROM_CART,
    REMOVE_ALL_ITEMS_FROM_CART,
    REMOVE_ITEM_FROM_CART
} from "../actions/types";

const updateCartItems = (cart, item, idx) => {

    if (item.count === 0) {
        return [
            ...cart.slice(0, idx),
            ...cart.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cart,
            item
        ];
    }

    return [
        ...cart.slice(0, idx),
        item,
        ...cart.slice(idx + 1)
    ];
};

const updateCartItem = (item, cartItem = {}, quantity) => {

    const { id = item.id,
        count = 0,
        name = item.name,
        total = 0,
        img = item.img,
        category = item.category,
        price = item.price
    } = cartItem;

    return {
        id,
        name,
        count: count + quantity,
        total: total + quantity * item.price,
        img,
        category,
        price
    }
};

const updateOrder = (state, item, quantity) => {
    const {cart: {productsInCart} } = state;
    const itemIndex = productsInCart.findIndex(({id}) => id === item.id);
    const cartItem = productsInCart.find(({id}) => id === item.id);
    const newItem = updateCartItem(item, cartItem, quantity);
    let totalQuantity;
    let totalPrice;
    if (quantity === 1) {
        totalQuantity = state.cart.totalQuantity + quantity;
        totalPrice = state.cart.totalPrice + item.price;
    }
    if (quantity === -1) {
        totalQuantity = state.cart.totalQuantity + quantity;
        totalPrice = state.cart.totalPrice - item.price;
    }
    if (quantity < -1) {
        totalQuantity = state.cart.totalQuantity + quantity;
        totalPrice = state.cart.totalPrice + (item.price * quantity);
    }
    return {
        productsInCart: updateCartItems(productsInCart, newItem, itemIndex),
        totalPrice,
        totalQuantity
    };
};

const cart = (state, action) => {
    if(state === undefined) {
        return {
            productsInCart: localStorage.cart ? JSON.parse(localStorage.cart).productsInCart : [],
            totalPrice: localStorage.cart ? JSON.parse(localStorage.cart).totalPrice : 0,
            totalQuantity: localStorage.cart ? JSON.parse(localStorage.cart).totalQuantity : 0,
        }
    }

    switch (action.type) {
        case GET_ITEMS_FROM_CART:
            return{
                ...state.cart
            };
        case ADD_ITEM_TO_CART:
            return updateOrder(state, action.payload, 1);
        case REMOVE_ITEM_FROM_CART:
            return updateOrder(state, action.payload, -1);
        case REMOVE_ALL_ITEMS_FROM_CART:
            const item = state.cart.productsInCart.find(({id}) => id === action.payload.id);
            return updateOrder(state, action.payload, -item.count);
        case CLEAR_CART:
            return {
                productsInCart: [],
                totalPrice: 0,
                totalQuantity: 0
            }
        default:
            return state.cart;
    }
};

export default cart;
import {FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUESTED, FETCH_PRODUCTS_SUCCESS} from "../actions/types";

const allProducts = (state, action) => {
    if(state === undefined) {
        return {
            products: [],
            loading: true,
            error: false
        }
    }

    switch (action.type) {
        case FETCH_PRODUCTS_REQUESTED:
            return{
                products: [],
                loading: true,
                error: null
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                loading: false
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                products: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.allProducts;
    }
};

export default allProducts;
import {
    FETCH_SIMILAR_PRODUCTS_REQUESTED,
    FETCH_SIMILAR_PRODUCTS_SUCCESS,
    FETCH_SIMILAR_PRODUCTS_FAILURE
} from "../actions/types";

const similarProducts = (state, action) => {
    if(state === undefined) {
        return {
            products: [],
            loading: true,
            error: false
        }
    }

    switch (action.type) {
        case FETCH_SIMILAR_PRODUCTS_REQUESTED:
            return{
                products: [],
                loading: true,
                error: null
            };
        case FETCH_SIMILAR_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                loading: false
            };
        case FETCH_SIMILAR_PRODUCTS_FAILURE:
            return {
                products: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.similarProducts;
    }
};

export default similarProducts;
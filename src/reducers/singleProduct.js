import {
    FETCH_SINGLE_PRODUCT_FAILURE,
    FETCH_SINGLE_PRODUCT_REQUESTED,
    FETCH_SINGLE_PRODUCT_SUCCESS
} from "../actions/types";

const singleProduct = (state, action) => {
    if(state === undefined) {
        return {
            product: {},
            loading: true,
            error: false
        }
    }

    switch (action.type) {
        case FETCH_SINGLE_PRODUCT_REQUESTED:
            return{
                product: {},
                loading: true,
                error: null
            };
        case FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                product: action.payload,
                loading: false
            };
        case FETCH_SINGLE_PRODUCT_FAILURE:
            return {
                product: {},
                loading: false,
                error: action.payload
            }
        default:
            return state.singleProduct;
    }
};

export default singleProduct;
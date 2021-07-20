import {
    FETCH_SINGLE_PRODUCT_FAILURE,
    FETCH_SINGLE_PRODUCT_REQUESTED,
    FETCH_SINGLE_PRODUCT_SUCCESS

} from "./types";

const productRequested = () => {
    return {
        type: FETCH_SINGLE_PRODUCT_REQUESTED
    };
};

const productLoaded = (product) => {
    return {
        type: FETCH_SINGLE_PRODUCT_SUCCESS,
        payload: product
    };
};

const productError = (err) => {
    return {
        type: FETCH_SINGLE_PRODUCT_FAILURE,
        payload: err
    };
};


const fetchSingleProduct = (eStoreService) => (id) => (dispatch) => {
    dispatch(productRequested());
    eStoreService.getSingleProduct(id)
        .then((data) => dispatch(productLoaded(data)))
        .catch((err) => dispatch(productError(err)));
};

export {
    fetchSingleProduct,
};
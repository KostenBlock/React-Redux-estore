import {
    FETCH_SIMILAR_PRODUCTS_FAILURE,
    FETCH_SIMILAR_PRODUCTS_REQUESTED,
    FETCH_SIMILAR_PRODUCTS_SUCCESS
} from "./types";


const productsRequested = () => {
    return {
        type: FETCH_SIMILAR_PRODUCTS_REQUESTED
    };
};

const productsLoaded = (products) => {
    return {
        type: FETCH_SIMILAR_PRODUCTS_SUCCESS,
        payload: products
    };
};

const productsError = (err) => {
    return {
        type: FETCH_SIMILAR_PRODUCTS_FAILURE,
        payload: err
    };
};

const fetchSimilarProducts = (eStoreService) => (item) => (dispatch) => {
    dispatch(productsRequested());
    eStoreService.getSimilarProducts(item)
        .then((data) => dispatch(productsLoaded(data)))
        .catch((err) => dispatch(productsError(err)));
};

export {
    fetchSimilarProducts
}
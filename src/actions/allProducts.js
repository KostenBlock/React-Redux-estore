import {
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUESTED,
    FETCH_PRODUCTS_SUCCESS
} from "./types";

const productsRequested = () => {
    return {
        type: FETCH_PRODUCTS_REQUESTED
    };
};

const productsLoaded = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    };
};

const productsError = (err) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: err
    };
};

const fetchProducts = (eStoreService) => () => (dispatch) => {
    dispatch(productsRequested());
    eStoreService.getProducts()
        .then((data) => dispatch(productsLoaded(data)))
        .catch((err) => dispatch(productsError(err)));
};

const fetchGenderProducts = (eStoreService, gender) => () => (dispatch) => {
    dispatch(productsRequested());
    eStoreService.getGenderProducts(gender)
        .then((data) => dispatch(productsLoaded(data)))
        .catch((err) => dispatch(productsError(err)));
};

const fetchCategoryProducts = (eStoreService, category) => () => (dispatch) => {
    dispatch(productsRequested());
    eStoreService.getCategoryProducts(category)
        .then((data) => dispatch(productsLoaded(data)))
        .catch((err) => dispatch(productsError(err)));
};

// const fetchWomenProducts = (eStoreService) => () => (dispatch) => {
//     dispatch(productsRequested());
//     eStoreService.getWomenProducts()
//         .then((data) => dispatch(productsLoaded(data)))
//         .catch((err) => dispatch(productsError(err)));
// };

export {
    fetchProducts,
    fetchGenderProducts,
    fetchCategoryProducts
};
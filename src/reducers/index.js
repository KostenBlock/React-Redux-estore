import allProducts from "./allProducts";
import singleProduct from "./singleProduct";
import similarProducts from "./similarProducts";
import cart from "./cart";

const reducer = (state , action) => {
    return {
        allProducts: allProducts(state,action),
        singleProduct: singleProduct(state, action),
        similarProducts:similarProducts(state, action),
        cart: cart(state,action)
    };
};

export default reducer;
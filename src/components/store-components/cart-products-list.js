import {bindActionCreators} from "redux";
import {compose} from "../../utils";
import {connect} from "react-redux";
import {
    addItemToCart,
    clearCart,

    removeItemFromCart, removeItemsFromCart
} from "../../actions";
import CartList from "../cart";



const mapStateToProps = ({cart:{productsInCart, totalQuantity, totalPrice}}) => {
    return {
        productsInCart,
        totalQuantity,
        totalPrice
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addItemToCart,
        removeItemFromCart,
        removeItemsFromCart,
        clearCart
    }, dispatch);
};

const CartProductsList = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(CartList);

export default CartProductsList;
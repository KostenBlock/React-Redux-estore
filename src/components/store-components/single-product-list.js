import {bindActionCreators} from "redux";
import {addItemToCart, fetchSingleProduct} from "../../actions";
import {compose} from "../../utils";
import withEStoreService from "../hoc/with-e-store-service";
import {connect} from "react-redux";
import {withSingleData} from "../hoc";
import SingleProduct from "../single-product/single-product";


const mapDispatchToProps = (dispatch, {eStoreService}) => {
    return bindActionCreators({
        fetchSingleProduct: fetchSingleProduct(eStoreService),
        addItemToCart
    }, dispatch);
};

const mapStateToProps = (props) => {
    const {singleProduct} = props;
    const {product, loading, error} = singleProduct;

    return {
        product,
        loading,
        error,
    };
};

const OneProduct = compose(
    withEStoreService(),
    connect(mapStateToProps, mapDispatchToProps),
    withSingleData
)(SingleProduct);

export default OneProduct;
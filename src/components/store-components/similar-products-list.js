import {bindActionCreators} from "redux";
import {fetchSimilarProducts} from "../../actions";
import {compose} from "../../utils";
import withEStoreService from "../hoc/with-e-store-service";
import {connect} from "react-redux";
import {withSimilarData} from "../hoc";
import SimilarProducts from "../similar-products";

const mapDispatchToProps = (dispatch, {eStoreService}) => {
    return bindActionCreators({
        fetchSimilarProducts: fetchSimilarProducts(eStoreService)
    }, dispatch);
};


const mapStateToProps = (props) => {
    const {similarProducts} = props;
    const {products, loading, error} = similarProducts;
    return {
        products,
        loading,
        error,
    };
};

const SimilarProductsList = compose(
    withEStoreService(),
    connect(mapStateToProps, mapDispatchToProps),
    withSimilarData
)(SimilarProducts);

export default SimilarProductsList;
import {bindActionCreators} from "redux";
import {addItemToCart, fetchCategoryProducts, fetchGenderProducts, fetchProducts} from "../../actions";
import {compose} from "../../utils";
import {withData, withEStoreService} from "../hoc";
import {connect} from "react-redux";
import ProductsList from "../products-list";

const mapStateToProps = ({allProducts:{products, loading, error}}) => {
    return {
        products,
        loading,
        error
    };
};

const mapDispatchToPropsAll = (dispatch, {eStoreService}) => {
    return bindActionCreators({
        fetchProducts: fetchProducts(eStoreService),
        addItemToCart
    }, dispatch);
};

const mapDispatchToPropsMen = (dispatch, {eStoreService}) => {
    return bindActionCreators({
        fetchProducts: fetchGenderProducts(eStoreService, "men"),
        addItemToCart
    }, dispatch);
};

const mapDispatchToPropsWomen = (dispatch, {eStoreService}) => {
    return bindActionCreators({
        fetchProducts: fetchGenderProducts(eStoreService, "women"),
        addItemToCart
    }, dispatch);
};

const mapDispatchToPropsClothes = (dispatch, {eStoreService}) => {
    return bindActionCreators({
        fetchProducts: fetchCategoryProducts(eStoreService, "clothes"),
        addItemToCart
    }, dispatch);
}

const mapDispatchToPropsAccessories = (dispatch, {eStoreService}) => {
    return bindActionCreators({
        fetchProducts: fetchCategoryProducts(eStoreService, "accessories"),
        addItemToCart
    }, dispatch);
}

const AllList = compose(
    withEStoreService(),
    connect(mapStateToProps, mapDispatchToPropsAll),
    withData
)(ProductsList);

const MenList = compose(
    withEStoreService(),
    connect(mapStateToProps, mapDispatchToPropsMen),
    withData
)(ProductsList);

const WomenList = compose(
    withEStoreService(),
    connect(mapStateToProps, mapDispatchToPropsWomen),
    withData
)(ProductsList);

const ClothesList = compose(
    withEStoreService(),
    connect(mapStateToProps, mapDispatchToPropsClothes),
    withData
)(ProductsList);

const AccessoriesList = compose(
    withEStoreService(),
    connect(mapStateToProps, mapDispatchToPropsAccessories),
    withData
)(ProductsList);

export {
    AllList,
    MenList,
    WomenList,
    ClothesList,
    AccessoriesList
}
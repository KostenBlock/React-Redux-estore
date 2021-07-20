import React from "react";
import ProductList from "./poduct-list/product-list";
import "./products-list.css";

const ProductsList = ({products, title, addItemToCart}) => {

    return (
        <div className="items-wrapper">
            <div className="items-title">
                <h4>{title}</h4>
            </div>
            <div className="items">
                {products.map((product) => {
                    return (
                        <div key={product.id} className="item">
                            <ProductList
                                product={product}
                                addItemToCart={addItemToCart}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductsList;
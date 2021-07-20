import {Link} from "react-router-dom";
import {Icon} from "react-materialize";
import React from "react";
import "./similar-products.css";

const SimilarProducts = ({products, addItemToCart}) => {

    return (
        <div className="similar-products">
            <h5>You might also like</h5>
            {products.map((product) => {
                return(
                    <div key={product.id} className="item">
                        <Link to={`/products/${product.id}`}>
                            <div className="product-img">
                                <img alt={product.name} src={product.img} />
                            </div>
                            <div className="product-details">
                                <h1 id="product-name">{product.name}</h1>
                                <h4 id="product-description">{product.description}</h4>
                            </div>
                        </Link>
                        <div className="price-add">
                            <h5 id="product-price">${product.price}</h5>
                            <i className="fas fa-cart-plus" onClick={() => addItemToCart(product)}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default SimilarProducts;

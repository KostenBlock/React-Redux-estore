import React, { Fragment } from 'react';

import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const ProductList = ({product, addItemToCart}) => {
    const { id, name, description, price, img } = product;

    const addItem = () => {
        addItemToCart(product);
    };

    return (
        <Fragment>
            <Link to={`/products/${id}`}>
                <div className="product-img">
                    <img alt={name} src={img} />
                </div>
                <div className="product-details">
                    <h1 id="product-name">{name}</h1>
                    <h4 id="product-description">{description}</h4>
                </div>
            </Link>
            <div className="price-add">
                <h5 id="product-price">${price}</h5>
                <i className="fas fa-cart-plus" onClick={addItem}/>
            </div>
        </Fragment>
    )
};


export default ProductList;
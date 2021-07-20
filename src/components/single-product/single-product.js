import React from 'react';
import { Icon } from 'react-materialize';
import './single-product.css';
import SimilarProductsList from "../store-components/similar-products-list";

const SingleProduct = ({product, addItemToCart}) => {
  const { name, img, price, description } = product;

  const addItem = () => {
    addItemToCart(product);
  };

  return (
      <div className="show-product">
        <div className="item-wrapper">
          <div className="item-image">
            <img className="product-image" src={img} alt="product" />
          </div>
          <div className="item-name">
            <div className="product-info">
              <h3 id="product-name">{name}</h3>
            </div>
            <div className="product-bio">
              <p id="product-description">{description}</p>
              <p id="product-price">${price}</p>
              <i className="fas fa-cart-plus" onClick={addItem}/>
            </div>
            <div className="product-review">
              <div className="stars">
                <i className="far fa-star"/>
                <i className="far fa-star"/>
                <i className="far fa-star"/>
                <i className="far fa-star"/>
                <i className="far fa-star"/>
              </div>
            </div>
          </div>
        </div>
        <SimilarProductsList product={product} addItemToCart={addItemToCart}/>
      </div>
    );
};

export default SingleProduct;
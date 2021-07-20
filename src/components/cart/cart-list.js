import React, {Fragment} from "react";
import "./cart-list.css";
import CartItem from "./cart-item";

const CartList = ({productsInCart, addItemToCart,
                      removeItemFromCart, removeItemsFromCart,
                      clearCart, totalPrice, totalQuantity}) => {

    return (
        <Fragment>
            {productsInCart !== null && productsInCart.length !== 0
                ? <div className="card mt-5 mb-5">
                        <div className="row">
                            <div className="col-md-12 cart">
                                <div className="title">
                                    <div className="row">
                                        <div className="col">
                                            <h4><b>Shopping Cart</b></h4>
                                        </div>
                                        <div className="col align-self-center text-right text-muted">{totalQuantity} items</div>
                                    </div>
                                </div>
                            {productsInCart.map(item => (<CartItem key={item.id}
                                                                   item={item}
                                                         addItemToCart={addItemToCart}
                                                         removeItemFromCart={removeItemFromCart}
                                                         removeItemsFromCart={removeItemsFromCart}/>
                                                         ))}
                            </div>
                        </div>
                    <div>Вы заплатите: ${ totalPrice }</div>
                    <div>
                        <button className="btn" onClick={() => clearCart()}>ОЧИСТИТЬ КОРИЗНУ</button>
                    </div>
                </div>
                : <p style={{color: "black", height: "230px"}}>Корзина пуста</p>
            }
        </Fragment>
    )
};

export default CartList;

import React from "react";

const CartItem = ({item, addItemToCart, removeItemFromCart, removeItemsFromCart}) => {

    const { name, count, total, img, category } = item;

    const addItem = () => {
        addItemToCart(item);
    }

    const removeItem = () => {
        removeItemFromCart(item);
    }

    const removeItems = () => {
        removeItemsFromCart(item);
    }

    return (
        <div className="row border-top border-bottom">
            <div className="row main align-items-center">
                <div className="col-2"><img alt={name} className="img-fluid" src={img}/>
                </div>
                <div className="col">
                    <div className="row text-muted">{category}</div>
                    <div className="row">{name}</div>
                </div>
                <div className="col"><button onClick={removeItem}>-</button><b className="border">{count}</b><button onClick={addItem}>+</button>
                </div>
                <div className="col">$ {total} <span className="close" onClick={removeItems}>remove</span></div>
            </div>
        </div>
    )
}

export default CartItem;
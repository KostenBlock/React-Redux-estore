import React from "react";
import "./index.css";
import {CartProductsList} from "../store-components";

const CartPage = () => {
    return (
        <div className="content">
            <CartProductsList/>
        </div>
    )
};

export default CartPage;
import React from "react";
import {OneProduct} from "../store-components";

const SingleProductPage = ({itemId}) => {
    return (
        <div className="">
            <OneProduct itemId={itemId}/>
        </div>
    )
};

export default SingleProductPage;
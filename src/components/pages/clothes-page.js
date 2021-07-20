import React from "react";
import {ClothesList} from "../store-components";
import "./index.css"

const ClothesPage = () => {
    return (
        <div className="content">
            <ClothesList title="Clothes"/>
        </div>
    )
};

export default ClothesPage;
import React from "react";
import { Route, Switch } from "react-router-dom";
import {
    AccessoriesPage, CartPage,
    ClothesPage,
    HomePage,
    MenPage, SingleProductPage,
    WomenPage
} from "../pages";


const App = () => {
    return (
        <Switch>
            <Route path="/"
                   component={HomePage}
                   exact
            />
            <Route path="/men"
                   component={MenPage}
                   exact
            />
            <Route path="/women"
                   component={WomenPage}
                   exact
            />
            <Route path="/clothes"
                   component={ClothesPage}
                   exact
            />
            <Route path="/accessories"
                   component={AccessoriesPage}
                   exact
            />
            <Route path="/cart"
                   component={CartPage}
                   exact
            />
            <Route exact path="/products/:id"
                   render={({match}) => {
                       const { id } = match.params;
                       return <SingleProductPage itemId={id}/>
                   }}
            />
        </Switch>
    )
};

export default App;
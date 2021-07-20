import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';
import {connect} from "react-redux";


const Navbar = ({totalQuantity}) => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/women">Women</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/men">Men</NavLink></li>
      </ul>
    </div>
    <div className="shopping-cart">
      <NavLink to="/cart"><i className="fas fa-shopping-cart">{totalQuantity}</i></NavLink>
    </div>
  </nav>
);

const mapStateToProps = ( {cart} ) => {
    const {totalQuantity} = cart;

    localStorage.setItem("cart", JSON.stringify(cart));

    return {
        totalQuantity
    };
};

export default connect(mapStateToProps)(Navbar);

import React, { useState, useEffect } from "react";
import cartImg from '../assets/icons/cart-shopping-solid.svg'
import "./cartWidget.css";

const CartWidget = () => {

    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle cart" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={cartImg} className="cart" />
        </a>
        <ul className="dropdown-menu" id= "elements" aria-labelledby="navbarDropdown">
        </ul>
    </li>
    );
};

export default CartWidget;
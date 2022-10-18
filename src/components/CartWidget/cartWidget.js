import React from "react";
//Img
import cartImg from '../assets/icons/cart-shopping-solid.svg'
//Style
import "./cartWidget.css";
//React-Router-Dom
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <Link to="/cart" >
            <img src={cartImg} className="cart" alt="carrito"/>
        </Link>
    );
};

export default CartWidget;
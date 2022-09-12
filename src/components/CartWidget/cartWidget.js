import React from "react";
import cartImg from '../assets/icons/cart-shopping-solid.svg'
import "./cartWidget.css";
import { Link } from 'react-router-dom';

const CartWidget = () => {
//<a className="nav-link dropdown-toggle cart" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//</a>
    return (
        <li className="nav-item dropdown">
            <Link to="/cart" >
                <img src={cartImg} className="cart" alt="carrito"/>
            </Link>
        
        <ul className="dropdown-menu" id= "elements" aria-labelledby="navbarDropdown">
        </ul>
    </li>
    );
};

export default CartWidget;
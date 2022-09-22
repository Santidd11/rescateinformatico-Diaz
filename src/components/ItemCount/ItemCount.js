import React, { useState, useContext } from "react";
import "./ItemCount.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';


const ItemCount = ( {stock, initial, onAdd, array} ) => {

    const [itemsCart, setItemsCart, addToCart] = useContext(CartContext);

    const readyCart=()=>{
        addToCart(array)
    }

    const [counter, setCounter] = useState(initial);
    const [isEnabled, setIsEnabled] = useState(false);

    const plusCart = () => {
        if (counter < stock){
            setCounter(counter + 1);
        }
    };
    const minusCart = () => {
        if (counter > initial){
            setCounter(counter - 1);
        }
    };
    const addCart = () => {
        if (counter <= stock){
            onAdd(counter)
            setCounter(initial)
            setIsEnabled(true)
        }
    };

    return (
        <div className="form">
            <div className="UserSection">
                <button onClick={minusCart} className="btn third">-</button>
                <p className="counter">{counter}</p>
                <button onClick={plusCart} className="btn third">+</button>
            </div>
            <button onClick={addCart} className="btn btn-outline-dark">Agregar al carrito</button>
            {isEnabled ? <Link to="/cart" ><button className="btn btn-success terminarBtn" onClick={readyCart} >Terminar Compra</button></Link> : null}
            
        </div>
    )
}

export default ItemCount
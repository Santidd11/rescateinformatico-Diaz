import React, { useState } from "react";
import "./ItemCount.css";
import { Link } from 'react-router-dom';


const ItemCount = ( {stock, initial, onAdd} ) => {

    const [counter, setCounter] = useState(initial);

    const plusCart = (e) => {
        e.preventDefault();
        if (counter < stock){
            setCounter(counter + 1);
        }
    };
    const minusCart = (e) => {
        e.preventDefault();
        if (counter > initial){
            setCounter(counter - 1);
        }
    };
    const addCart = (e) => {
        e.preventDefault();
        if (counter <= stock){
            onAdd(counter)
        }
        setCounter(initial)
    };

    return (
        <form className="form">
            <div className="UserSection">
                <button onClick={minusCart} className="btn third">-</button>
                <p className="counter">{counter}</p>
                <button onClick={plusCart} className="btn third">+</button>
            </div>
            <button onClick={addCart} className="btn btn-outline-dark">Agregar al carrito</button>
            <Link to="/cart" ><button className="btn btn-success terminarBtn" >Terminar Compra</button></Link>
        </form>
    )
}

export default ItemCount
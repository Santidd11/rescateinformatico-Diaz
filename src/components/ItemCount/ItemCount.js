import React, { useState} from "react";
import "./ItemCount.css";
import { Link } from 'react-router-dom';



const ItemCount = ( {stock, initial, onAdd} ) => {


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
                {stock > 0 ? <p className="counter">{counter}</p> : <p className="counter">No hay Stock</p>}
                <button onClick={plusCart} className="btn third">+</button>
            </div>
            {stock > 0 ? <button onClick={addCart} className="btn btn-outline-dark">Agregar al carrito</button> : null}
            {isEnabled ? <Link to="/cart" ><button className="btn btn-success terminarBtn"  >Terminar Compra</button></Link> : null}
        </div>
    )
}

export default ItemCount
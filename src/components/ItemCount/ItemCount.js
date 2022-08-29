import React, { useState } from "react";
import "./ItemCount.css";


const ItemCount = ( {stock, initial, onAdd} ) => {

    const [counter, setCounter] = useState(initial);

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
        }
    };

    return (
        <div>
            <div className="UserSection">
                <button onClick={minusCart} className="btn third">-</button>
                <p className="counter">{counter}</p>
                <button onClick={plusCart} className="btn third">+</button>
            </div>
            <button onClick={addCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
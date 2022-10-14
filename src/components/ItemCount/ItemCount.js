import React, { useState, useContext} from "react";
import "./ItemCount.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';



const ItemCount = ( {stock, initial, onAdd} ) => {


    const [counter, setCounter] = useState(initial);
    const [isEnabled, setIsEnabled] = useState(false);
    const [itemsCart] = useContext(CartContext);

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

    const local = (array) =>{
        var item = JSON.stringify(array)
        localStorage.setItem("carrito", item)
    }

    return (
        <div className="form">
            <div className="UserSection">
                <button onClick={minusCart} className="btn third">-</button>
                {stock > 0 ? <p className="counter">{counter}</p> : <p className="counter">No hay Stock</p>}
                <button onClick={plusCart} className="btn third">+</button>
            </div>
            {stock > 0 ? <button onClick={addCart} className="btn btn-outline-dark">Agregar al carrito</button> : null}
            {isEnabled ? <Link to="/cart" ><button className="btn btn-success terminarBtn" onClick={local(itemsCart)} >Terminar Compra</button></Link> : null}
        </div>
    )
}

export default ItemCount
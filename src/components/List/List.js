import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import './List.css'

const List = ({ data }) => {

    const [itemsCart, setItemsCart, addToCart, clear, clearItem] = useContext(CartContext);

    const clearCart=()=>{
        clear()
    }

    const deleteItem=()=>{
        clearItem(data.id)
    }

    return (
        <div className='container container-fluid itemContainer'>
            <div className="card">
                <img src={data.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${data.price} </li>
                    <li className="list-group-item">Cantidad: {data.quantity} </li>
                    <li className="list-group-item">Total: ${data.total} </li>
                </ul>
                <div className="card-body">
                    <button onClick={deleteItem} className="card-link btn btn-danger">Sacar del carrito</button>
                </div>
            </div>
            <button onClick={clearCart} className='btn btn-danger'>Vaciar carrito</button>
        </div>
    )
}

export default List
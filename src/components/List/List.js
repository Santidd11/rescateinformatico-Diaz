import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import './List.css'

const List = ({ data }) => {

    const [itemsCart, setItemsCart] = useContext(CartContext);


    const clearItem = ()=>{
        setItemsCart(itemsCart.filter(function(item){
            return item.id !== data.id;
        }))
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
                    <button onClick={clearItem} className="card-link btn btn-danger">Sacar del carrito</button>
                </div>
            </div>
        </div>
    )
}

export default List
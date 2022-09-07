import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";

const ItemDetail = ({ name, img, price, stock, description }) => {

    const onAdd = (quantity)=>{
        alert(quantity+' Items agregados con exito');
    }

    return (
        <div className='container-fluid itemContainer'>
            <h1>{name} </h1>
            <img src={img} alt="" className='img-fluid'/>
            <h1>{price} </h1>
            <h1>{description} </h1>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail
import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import swal from 'sweetalert';
import { CartContext } from '../../CartContext';


const ItemDetail = ({ name, img, price, stock, description, id }) => {

    const [itemvalue, setItemvalue] = useState([]);
    const [item, setItem] = useState("");
    const [itemsCart, setItemsCart] = useContext(CartContext);

    const onAdd = (quantity)=>{
        setItemsCart(itemsCart.concat({id: id, img: img, name: name, price: price, quantity:quantity, total: (quantity*price)}));
        swal({
            title: quantity +" "+ name + ' agregado con exito',
            icon: "success",
            button: "Aceptar"
        });
        setItem({id: id, img: img, name: name, price: price, quantity:quantity, total: (quantity*price)});
        if (item !== ""){
            if(item.id === itemvalue.id){
                itemvalue.quantity += item.quantity
                itemvalue.total += item.total
            } else {
                setItemvalue(item);
            }
        }
    }

    return (
        <div className='container-fluid itemContainer'>
            <h1>{name} </h1>
            <img src={img} alt="" className='img-fluid'/>
            <h1>${price} </h1>
            <h1>{description} </h1>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} array={itemvalue} />
        </div>
    )
}

export default ItemDetail
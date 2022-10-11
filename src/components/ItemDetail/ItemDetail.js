import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import swal from 'sweetalert';
import { CartContext } from '../../CartContext';


const ItemDetail = ({ name, img, price, stock, description, id }) => {

    const [itemsCart, setItemsCart] = useContext(CartContext);

    const onAdd = (quantity)=>{
        if (itemsCart.length === 0){
            setItemsCart(itemsCart.concat({id: id, img: img, name: name, price: price, quantity:quantity, total: (quantity*price)}));
        }   else{
            var numero = false
            for (let i = 0; i < itemsCart.length; i++) {
                if(id === itemsCart[i].id){
                    itemsCart[i].quantity += quantity
                    itemsCart[i].total += (quantity*price)
                    numero = true;
                    break
                }
            }
            if(numero === false){
                setItemsCart(itemsCart.concat({id: id, img: img, name: name, price: price, quantity:quantity, total: (quantity*price)}));
            }
        }
        swal({
            title: quantity +" "+ name + ' agregado con exito',
            icon: "success",
            button: "Aceptar"
        });
    }

    return (
        <div className='container-fluid itemContainer'>
            <h1>{name} </h1>
            <img src={img} alt="" className='img-fluid'/>
            <h1>${price} </h1>
            <h1>{description} </h1>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </div>
    )

}
export default ItemDetail
import React, { useContext } from 'react';
//Component
import ItemCount from '../ItemCount/ItemCount';
//Style
import "./ItemDetail.css";
//Sweet Alert
import swal from 'sweetalert';
//Context
import { CartContext } from '../../CartContext';
//React-Router-Dom
import { Link } from 'react-router-dom';


const ItemDetail = ({ name, img, price, stock, description, id }) => {

    //Variables
    const [itemsCart, setItemsCart] = useContext(CartContext);

    //Functions
    const onAdd = (quantity)=>{
        if (itemsCart.length === 0){
            setItemsCart(itemsCart.concat({id: id, img: img, name: name, price: price, stock: stock, quantity:quantity, total: (quantity*price)}));
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
                setItemsCart(itemsCart.concat({id: id, img: img, name: name, price: price, stock: stock, quantity:quantity, total: (quantity*price)}));
            }
        }
        swal({
            title: quantity +" "+ name + ' agregado con exito',
            icon: "success",
            button: "Aceptar"
        });
    }

    return (
        <div>
            {name ? (
                <div className='itemContainer'>
                    <h1>{name} </h1>
                    <img src={img} alt="" className='img-fluid'/>
                    <p className='fs-2 text'>${price} </p>
                    <p className='fs-3 text'>{description} </p>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                </div>) : (
                <div>
                    <h2>Producto Inexistente</h2>
                    <Link to="/" className="nav-item nav-link active fs-3 text-success">
                        Visitar stock
                    </Link>
                </div>)}
        </div>
    )

}
export default ItemDetail
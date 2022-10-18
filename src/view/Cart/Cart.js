import React, { useContext} from 'react';
//Context
import { CartContext } from '../../CartContext';
//Component
import List from '../../components/List/List'
import Form from "../../components/Form/Form"
//React-Router-Dom
import { Link } from 'react-router-dom';


const Cart = () => {

    //Variables
    const [itemsCart, setItemsCart] = useContext(CartContext);

    //Functions
    const clearCart=()=>{
        setItemsCart([])
        localStorage.clear()
    }
    const mapping = itemsCart.map((prod) => <List key = {prod.id} data = {prod}/>)


    return (
        <div>
            {itemsCart.length > 0 ? (
                        <div>
                            <div>{mapping}</div>
                            <div>
                            {function() {
                                let total = 0;
                            for (let i = 0; i<itemsCart.length; i++){
                                total = total + itemsCart[i].total
                            }
                            return <p>Total a pagar: ${total}</p>
                            }
                            }</div>
                            <button onClick={clearCart} className="btn btn-danger">Vaciar Carrito</button>
                            <Form/>
                        </div>
                    ) : (
                        <div><p>No hay items en el carrito</p>
                        <Link to="/" className="nav-item nav-link active fs-3 text-success">
                        Visitar stock
                        </Link></div>
                    )}
        </div>
    )
}

export default Cart
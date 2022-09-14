import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import List from '../List/List'

const Cart = () => {

    const [itemsCart, setItemsCart] = useContext(CartContext);

    return (
        itemsCart.map((prod) => <List key = {prod.id} data = {prod}/>)
    )
}

export default Cart
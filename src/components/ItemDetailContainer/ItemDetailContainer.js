import React, { useState, useEffect } from 'react';
import { getStockById } from '../../stock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])
    const[loading, setLoading] = useState(true)
    const {itemId} = useParams();

    

    useEffect(() => {
        getStockById(itemId)
            .then(items => {
                setItems(items)
                setLoading(false)
            })
    }, [itemId])
    return (
        <div>
            {
                                loading
                                ?
                                <h1 className='cargando'>CARGANDO...</h1>
                                :
                                <ItemDetail {...items}/>
                        }
        </div>
    )
}

export default ItemDetailContainer
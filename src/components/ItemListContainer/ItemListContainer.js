import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import React, { useState, useEffect } from 'react';
import { getFetch } from '../../stock'


const ItemListContainer = () => {

        const[Items, setItems] = useState([])
        const[loading, setLoading] = useState(true)

        useEffect(() =>{
                getFetch
                .then((respond) => setItems(respond))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }, [])


        return (
                <div>
                        {
                                loading
                                ?
                                <h1 className='cargando'>CARGANDO...</h1>
                                :
                                <div id='perifericos' className="UserSection container">
                                        <div className='row justify-content-md-center'>
                                                <ItemList Items = {Items} className="col-6"/>
                                        </div>
                                </div>
                        }
                </div>
        )
}

export default ItemListContainer
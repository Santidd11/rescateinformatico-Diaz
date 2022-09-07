import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import React, { useState, useEffect } from 'react';
import { getStock, getStockByCategory } from '../../stock'
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {

        const[items, setItems] = useState([])
        const[loading, setLoading] = useState(true)
        const { categoryId } = useParams()

        useEffect(() =>{

                if(!categoryId){
                        getStock().then(items => {
                                setItems(items)
                                setLoading(false)
                        })
                }
                else{
                        getStockByCategory(categoryId).then(items => {
                                setItems(items)
                                setLoading(false)
                        })
                }
        }, [categoryId])


        return (
                <div>
                        {
                                loading
                                ?
                                <h1 className='cargando'>CARGANDO...</h1>
                                :
                                <div className="UserSection container">
                                        <div className='row justify-content-md-center'>
                                                <ItemList Items = {items} className="col-6"/>
                                        </div>
                                </div>
                        }
                </div>
        )
}

export default ItemListContainer
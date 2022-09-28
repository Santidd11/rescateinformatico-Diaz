import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import React, { useState, useEffect } from 'react';
import { getStock, getStockByCategory } from '../../stock'
import {useParams} from 'react-router-dom'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../FireBaseConfig'; 


const ItemListContainer = () => {

        const[items, setItems] = useState([])
        const[loading, setLoading] = useState(true)
        const { categoryId } = useParams()
        const getItems = async () => {
                const q = query(collection(db, 'stock-computadoras'));
                const docs = [];
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                        docs.push({...doc.data(), id: doc.id})
                });
                setItems(docs);
                setLoading(false);
        };

        useEffect(() => {
                getItems();
        }, [])




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
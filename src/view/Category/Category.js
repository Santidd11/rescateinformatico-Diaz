import ItemList from '../../components/ItemList/ItemList';
import "./Category.css"
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../FireBaseConfig'; 


const Category = () => {

        const[items, setItems] = useState([])
        const[loading, setLoading] = useState(true)
        const { categoryId } = useParams()


        useEffect(() => {
            const getItems = async () => {
                const q = query(collection(db, 'stock-computadoras'), where('category', '==', categoryId));
                const docs = [];
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                        docs.push({...doc.data(), id: doc.id})
                });
                setItems(docs);
                setLoading(false);
        };
        getItems();
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

export default Category
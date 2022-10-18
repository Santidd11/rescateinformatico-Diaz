import React, { useState, useEffect } from 'react';
//Component
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loader from '../../components/Loader/Loader';
//React-Router-Dom
import { useParams } from 'react-router-dom';
//Firebase
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from '../../FireBaseConfig'; 
//Style
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {

        //Variables
        const[items, setItems] = useState([])
        const[loading, setLoading] = useState(true)
        const { id } = useParams();


        //Functions
        useEffect(() => {
                const getItems = async () => {
                        const q = query(collection(db, 'stock-computadoras'), where(documentId(), '==', id));
                        const docs = [];
                        const querySnapshot = await getDocs(q);
                        querySnapshot.forEach((doc) => {
                                docs.push({...doc.data(), id: doc.id})
                        });
                        setItems(docs[0]);
                };
                getItems();
                setTimeout(() => {
                        setLoading(false);
                }, 1000);
        }, [id])




        return (
                <div>
                        {
                                loading
                                ?
                                <div className='UserSection'>
                                        <Loader />
                                </div>
                                :
                                <div>
                                        <div className='contenedor'>
                                                <ItemDetail {...items}/>
                                        </div>
                                </div>
                        }
                </div>
        )
}

export default ItemDetailContainer
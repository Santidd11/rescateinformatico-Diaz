import React, { useState, useEffect } from 'react';
//Components
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loader/Loader';
//React-Router-Dom
import {useParams} from 'react-router-dom'
//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../FireBaseConfig'; 
//Style
import "./Category.css"


const Category = () => {

        //Variables
        const[items, setItems] = useState([])
        const[loading, setLoading] = useState(true)
        const { categoryId } = useParams()

        //Functions
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
                                <div className='UserSection'>
                                        <Loader />
                                </div>
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
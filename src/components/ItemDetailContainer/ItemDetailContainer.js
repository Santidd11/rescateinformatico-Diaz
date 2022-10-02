import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../FireBaseConfig'; 

const ItemDetailContainer = () => {

    const[items, setItems] = useState([])
    const[loading, setLoading] = useState(true)
    const { categoryId } = useParams()


    useEffect(() => {
            const getItems = async () => {
                const q = query(collection(db, 'stock-computadoras'));
                const docs = [];
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                        docs.push({...doc.data(), id: doc.id})
                });
                setItems(docs);
                if (items.length > 0){
                    setLoading(false);
                }
                console.log(items)
        };
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
                                        <ItemDetail {...items}/>
                                    </div>
                            </div>
                    }
            </div>
    )
}

export default ItemDetailContainer
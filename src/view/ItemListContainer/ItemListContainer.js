import ItemList from '../../components/ItemList/ItemList';
import "./ItemListContainer.css"
import React, { useState, useEffect, useContext } from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../FireBaseConfig'; 
import { CartContext } from '../../CartContext';
import Loader from '../../components/Loader/Loader';


const ItemListContainer = () => {

        const[items, setItems] = useState([])
        const[loading, setLoading] = useState(true)
        const [itemsCart, setItemsCart] = useContext(CartContext);


        const localCart = () =>{
                var item = JSON.parse(localStorage.getItem("carrito"))
                setItemsCart(item)
        }

        const getItems = async () => {
                const q = query(collection(db, 'stock-computadoras'));
                const docs = [];
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                        docs.push({...doc.data(), id: doc.id})
                });
                setItems(docs);
                if(itemsCart.length === 0){
                        if(localStorage.getItem("carrito")){
                                localCart();
                        }
                }
                setLoading(false);

        };

        useEffect(() => {
                getItems();
        })




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

export default ItemListContainer
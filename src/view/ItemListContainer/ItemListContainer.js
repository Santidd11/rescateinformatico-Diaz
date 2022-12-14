import React, { useState, useEffect, useContext } from 'react';
//Component
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loader/Loader';
//Style
import "./ItemListContainer.css"
//Firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../FireBaseConfig'; 
//Context
import { CartContext } from '../../CartContext';
//Img
import Banner from "../../components/assets/logos/Titulo-removebg-preview.png"



const ItemListContainer = () => {

        //Variables
        const[items, setItems] = useState([])
        const[loading, setLoading] = useState(true)
        const [itemsCart, setItemsCart] = useContext(CartContext);

        //Functions
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
                                <div>  
                                        <img src={Banner} alt="banner"/>
                                        <section className='seccion'>
                                                <h2 className='fw-bold text-success'>??Ten??s alg??n problema con tu dispositivo electr??nico?</h2>
                                                <h2 className=''>Somos expertos en soluciones inform??ticas</h2>
                                                <h3 className=''>Empresa de inform??tica con m??s de 20 a??os en el rubro, dedicada a brindar soporte t??cnico y asesoramiento a empresas y particulares. Proveemos un servicio de excelencia, usando las mejores tecnolog??as y desarrollando soluciones inform??ticas a tu medida.</h3>
                                        </section>
                                        <h2 className='fw-bold text-success mt-5 mb-0'>Nuestros Productos</h2>
                                        <div className="UserSection container">
                                                <div className='row justify-content-md-center'>
                                                        <ItemList Items = {items} className="col-6"/>
                                                </div>
                                        </div>
                                </div>
                        }
                </div>
        )
}

export default ItemListContainer
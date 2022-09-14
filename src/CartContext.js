import React, { createContext, useState } from "react";


export const CartContext = createContext();

const initialCart = [];

export const CartProvider = ({ children }) => {
    const [itemsCart, setItemsCart] = useState(initialCart);

    const addToCart = (array) =>{
        if (array !== ""){
            if(array.id === itemsCart.id){
                itemsCart.quantity += array.quantity
                itemsCart.total += itemsCart.total
            } else {
                setItemsCart(itemsCart.concat(array));
            }
        }
    }

    const clear = () =>{
        setItemsCart(initialCart)
    }

    const clearItem = (id)=>{
        setItemsCart(itemsCart.filter(function(item){
            return item.id !== id;
        }))
    }

    const isInCart = (id) =>{
        if (itemsCart.id){
            console.log("true")
        }else{console.log("false")}
    }


    return(
        <CartContext.Provider value={[itemsCart, setItemsCart, addToCart, clear, clearItem]} >
            {children}
        </CartContext.Provider>
    )
}
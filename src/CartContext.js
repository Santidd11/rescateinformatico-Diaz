import React, { createContext, useState } from "react";


export const CartContext = createContext();

const initialCart = [];

export const CartProvider = ({ children }) => {
    const [itemsCart, setItemsCart] = useState(initialCart);

    return(
        <CartContext.Provider value={[itemsCart, setItemsCart]} >
            {children}
        </CartContext.Provider>
    )
}
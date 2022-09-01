import React from 'react'
import Item from '../Item/Item'

const ItemList = ( {Items} ) => {

    return (
        Items.map((prod) => <Item key = {prod.id} data = {prod}/>)
    )

}

export default ItemList;
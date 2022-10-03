import React from 'react'
import Item from '../Item/Item'
import { Link } from 'react-router-dom';


const ItemList = ( {Items} ) => {

    return (
        <div className="UserSection container CardListContainer">
            <div className='row justify-content-md-center'>
                {Items.map((prod) => {
                    return (
                        <Link to={`/detail/${prod.id}`} key = {prod.id} style={{ textDecoration: 'none', width: "fit-content", height: "fit-content" }} className='col-6'>
                            <Item key = {prod.id} data = {prod} />
                        </Link>
                    );
                })}
            </div>
        </div>
        
    )

}

export default ItemList;
import React from 'react'
//Style
import Item from '../Item/Item'
//React-Router-Dom
import { Link } from 'react-router-dom';


const ItemList = ( {Items} ) => {

    return (
        <div className="UserSection container CardListContainer">
            <div className='row justify-content-md-center'>
                {Items.map((prod) => {
                    return (
                        <Link to={`/detail/${prod.id}`} key = {prod.id} style={{ textDecoration: 'none', width: "fit-content", height: "fit-content" }} className='col-6 m-3 p-0'>
                            <Item key = {prod.id} data = {prod} />
                        </Link>
                    );
                })}
            </div>
        </div>
        
    )

}

export default ItemList;
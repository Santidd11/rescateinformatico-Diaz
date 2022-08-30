import Greeting from '../CardComponent/CardComponent';
import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
        const onAdd = (quantity)=>{
                alert(quantity+' Items agregados con exito');
        }

        return (
                <div>
                        <div id='perifericos' className="UserSection">
                                <div className='itemBox'>
                                        <Greeting
                                                img='https://m.media-amazon.com/images/I/71yGtauB-AL._AC_SY450_.jpg'
                                                name='Teclado'
                                        />
                                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                                </div>
                                <div className='itemBox'>
                                        <Greeting
                                                img='https://mexx-img-2019.s3.amazonaws.com/mouse-logitech-gamer-rgb-lila_38560_5.jpeg?v187'
                                                name='Mouse'
                                        />
                                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                                </div>
                                <div className='itemBox'>
                                        <Greeting
                                                img='https://www.lg.com/es/images/monitores/MD06025876/gallery/medium03.jpg'
                                                name='Monitor'
                                        />
                                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                                </div>
                        </div>
                        <div id='componentes' className="UserSection">
                                <div className='itemBox'>
                                        <Greeting
                                                img='https://m.media-amazon.com/images/I/51OVWRFJxsL._AC_SY580_.jpg'
                                                name='Motherboard'
                                        />
                                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                                </div>
                                <div className='itemBox'>
                                        <Greeting
                                                img='http://www.karlosperu.com/wp-content/uploads/2017/06/Intel-procesador.jpg'
                                                name='Procesador'
                                        />
                                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                                </div>
                                <div className='itemBox'>
                                        <Greeting
                                                img='https://images.fravega.com/f500/02392f4a30189dbbebfd0d9cf5b8de3a.jpg'
                                                name='Placa de Video'
                                        />
                                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                                </div>
                        </div>
                </div>
        )
}

export default ItemListContainer
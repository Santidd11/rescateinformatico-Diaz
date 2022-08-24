import React, { useState } from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import CardComponent from "./components/CardComponent/CardComponent";




function App() {
  
  const [counter, setCounter] = useState(0);

  const addToCart = () => {
    setCounter(counter + 1);
    alert("Item agregado con exito!")
  };


  return (
    <div className="App">
      <header className="header">
      <NavBar
        number = {counter}
        />
      </header>
      <div className='UserSection'>
        <CardComponent
						img='https://m.media-amazon.com/images/I/71yGtauB-AL._AC_SY450_.jpg'
						name='Teclado'
						fun={addToCart}
				/>
        <CardComponent
						img='https://mexx-img-2019.s3.amazonaws.com/mouse-logitech-gamer-rgb-lila_38560_5.jpeg?v187'
						name='Mouse'
						fun={addToCart}
				/>
        <CardComponent
						img='https://www.lg.com/es/images/monitores/MD06025876/gallery/medium03.jpg'
						name='Monitor'
						fun={addToCart}
				/>
      </div>
    </div>
  );
}

export default App;

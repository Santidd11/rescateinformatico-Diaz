import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './view/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './view/ItemDetailContainer/ItemDetailContainer';
import Cart from "./view/Cart/Cart"
import Category from "./view/Category/Category";
import { CartProvider } from './CartContext';



function App() {


  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <header className="header">
            <NavBar 
              number = "0" />
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<Category />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;


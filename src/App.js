//Style
import './App.css';
//Components
import NavBar from "./components/NavBar/NavBar";
//View
import ItemListContainer from './view/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './view/ItemDetailContainer/ItemDetailContainer';
import Cart from "./view/Cart/Cart"
import SobreNosotros from './view/SobreNosotros/SobreNosotros';
import Category from "./view/Category/Category";
//React-Router-Dom
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//Context
import { CartProvider } from './CartContext';



function App() {


  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <header className="header">
            <NavBar />
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<Category />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/sobre-nosotros' element={<SobreNosotros />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;


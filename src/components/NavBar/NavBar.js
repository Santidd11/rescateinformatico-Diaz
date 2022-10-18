import React, { useContext } from 'react';
//Img
import logo from '../assets/logos/Logo-removebg-preview.png';
//Component
import Cart from '../CartWidget/cartWidget';
//Style
import "./NavBar.css";
//React-Router-Dom
import { Link } from 'react-router-dom';
//Context
import { CartContext } from '../../CartContext';



const NavBar = () => {

  const [itemsCart] = useContext(CartContext);


    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom-3">
        <Link to="/">
          <img src={logo} height="80px" className="me-2" alt='' />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navigationBar" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul className='navbar-nav'>
              <Link to="/" className='nav-item nav-link active fs-3 text-success'>
                <p>Inicio</p>
              </Link>
              <li className="nav-item dropdown" /*Dropdown de categorias*/ >
                <p className="nav-link dropdown-toggle fs-3 text-success mb-0" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/category/componentes" className="nav-item nav-link active fs-3 text-success">
                      Componentes
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/perifericos" className="nav-item nav-link active fs-3 text-success">
                      Perifericos
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/accesorios" className="nav-item nav-link active fs-3 text-success">
                      Accesorios
                    </Link>
                  </li>
                </ul>
              </li>
              <Link to="/sobre-nosotros" className='nav-item nav-link active fs-3 text-success'>
                <p>Sobre Nosotros</p>
              </Link>
              <Link to="/cart" className='nav-item nav-link active fs-3 text-success'>
                <p>Carrito</p>
              </Link>
            </ul>
              <Cart />
            {itemsCart.length > 0 ? <h1 className="nav-item nav-link fs-3 text-success">{itemsCart.length}</h1> : null}
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
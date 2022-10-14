import logo from '../assets/logos/Logo-removebg-preview.png';
import React, { useContext } from 'react';
import Cart from '../CartWidget/cartWidget';
import "./NavBar.css";
import { Link } from 'react-router-dom';
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
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle fs-3 text-success" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            </ul>
            <div>
              <Cart />
            </div>
            {itemsCart.length > 0 ? <h1 className="nav-item nav-link fs-3 text-success">{itemsCart.length}</h1> : null}
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
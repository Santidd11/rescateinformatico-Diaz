import logo from '../assets/logos/Logo-removebg-preview.png';
import Cart from '../CartWidget/cartWidget';
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = ({number}) => {
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
            </ul>
            <div>
              <Cart />
            </div>
            <h1 className="nav-item nav-link fs-3 text-success">{number}</h1>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
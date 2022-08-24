import logo from '../assets/logos/Logo-removebg-preview.png';
import Cart from '../CartWidget/cartWidget';
import "./NavBar.css";

const NavBar = ({number}) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom-3">
        <img src={logo} height="80px" className="me-2" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navigationBar" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active fs-3 text-success" href="#">Inicio <span className="sr-only"></span></a>
            <a className="nav-item nav-link fs-3 text-success" href="#">Productos</a>
            <a className="nav-item nav-link fs-3 text-success" href="#">Sobre Nosotros</a>
            <a className="nav-item nav-link fs-3 text-success" href="#">Contacto</a>
            <div>
              <Cart />
            </div>
            <a className="nav-item nav-link fs-3 text-success" href="#">{number}</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
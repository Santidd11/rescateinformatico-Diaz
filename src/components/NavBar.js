import banner from "./assets/logos/Titulo-removebg-preview.png";
import logo from "./assets/logos/Logo-removebg-preview.png";
const NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom-3">
        <img src={logo} height="80px" class="me-2" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active fs-3 text-success" href="#">Inicio <span class="sr-only"></span></a>
            <a class="nav-item nav-link fs-3 text-success" href="#">Productos</a>
            <a class="nav-item nav-link fs-3 text-success" href="#">Sobre Nosotros</a>
            <a class="nav-item nav-link fs-3 text-success" href="#">Contacto</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
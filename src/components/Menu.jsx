import logo from "../assets/images/tipografia.jpg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const Menu = () => {
  return (
    // cambié lg por md, fijate que te parece que se haga hamburguesa en md en vez de lg.
    <Navbar id="menu" className="border-bottom px-5" bg="" expand="md">
      <Navbar.Brand href="#inicio"><img className="miLogo" src={logo} alt="Logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-grow-1 justify-content-end">
          {/* mx= margin left y right para darle un espaciado entre estos items */}
          <Nav.Link className="px-md-5 nav__bordeDer" href="#nosotros">NOSOTROS</Nav.Link>
          <Nav.Link className="px-md-5 nav__bordeDer" href="#proyectos">PROYECTOS</Nav.Link>
          <Nav.Link className="px-md-5 nav__bordeDer" href="#servicios">SERVICIOS</Nav.Link>
          <Nav.Link className="px-md-5" href="#contacto">CONTACTO</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const Menu = () => {
  return (
    // cambié lg por md, fijate que te parece que se haga hamburguesa en md en vez de lg.
    <Navbar className="" bg="" expand="md">
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-grow-1 justify-content-end">
          {/* mx= margin left y right para darle un espaciado entre estos items */}
          <Nav.Link className="px-md-5 nav__bordeDer" href="#home">NOSOTROS</Nav.Link>
          <Nav.Link className="px-md-5 nav__bordeDer" href="#link">PROYECTOS</Nav.Link>
          <Nav.Link className="px-md-5 nav__bordeDer" href="#home">SERVICIOS</Nav.Link>
          <Nav.Link className="px-md-5" href="#link">CONTACTO</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    
  );
};

export default Menu;

// const Menu = () => {
//   const [openClose, setOpenClose] = useState(false);

//   const handleClickOpen = () => {
//     setOpenClose(!openClose);
//   };

//   return (
//     <nav>
//       <div className="logo-marca">
//         <a href="#inicio">
//           <img src={ImagenLogo} alt="lim-arquitectura" />
//         </a>
//       </div>

//       <div className="btn-hamburguer">
//         <button onClick={handleClickOpen}>
//           {openClose ? <AiOutlineClose /> : <AiOutlineMenu />}
//         </button>
//       </div>

//       <div className="navegacion">
//         <ul className={openClose ? "nav-open" : "nav-close"}>
//           <li>
//             <a href="#nosotros">Nosotros</a>
//           </li>
//           <span>|</span>
//           <li>
//             <a href="#servicios">Servicios</a>
//           </li>
//           <span>|</span>
//           <li>
//             <a href="#proyectos">Proyectos</a>
//           </li>
//           <span>|</span>
//           <li>
//             <a href="#contacto">Contacto</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

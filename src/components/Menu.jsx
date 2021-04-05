import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Servicios</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
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

// dependencias

// sass y componentes react bootstrap
import './scss/app.css';
import {Container, Row, Col} from "react-bootstrap";

// vistas secciones
import Inicio from "./pages/Inicio";
import Menu from "./components/Menu";
import Slogan from "./components/Slogan";

import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";

import ProyectosContext from "./store/ProyectosContext";

function App() {
  return (
    <div className="App">
      <Container fluid className="p-0">
        <Row className="m-0 row__menu" >
          <Col className="p-0">
            <Menu/>
          </Col>
        </Row>
        <Inicio/>
        <Row className="m-0" bsPrefix="row-slogan">
          <Col className="p-0">
            <Slogan />
          </Col>
        </Row>
        <Nosotros/>
        <ProyectosContext>
          <Proyectos/>
        </ProyectosContext> 
        <Servicios/>
        <Contacto/>
        <Footer/>

      </Container> 
    </div>
  );
}

export default App;
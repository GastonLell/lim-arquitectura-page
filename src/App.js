// dependencias

import './scss/app.css';
// componentes react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// vistas secciones
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

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
        <Nosotros/>
        <Proyectos/>
        <Servicios/>
        <Contacto/>
        <Footer/>

      </Container> 
    </div>
  );
}

export default App;
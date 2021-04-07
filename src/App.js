// dependencias

import './scss/app.css';
// vistas secciones
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <div className="App">
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col className="p-0">
            <Inicio/>
          </Col>
        </Row>
        <Row className="m-0">
          <Col className="p-0">
            <Nosotros/>
          </Col>
        </Row>
        <Row className="m-0">
          <Col className="p-0">
            <Proyectos/>
          </Col>
        </Row>
        <Row className="m-0">
          <Col className="p-0">
            <Servicios/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
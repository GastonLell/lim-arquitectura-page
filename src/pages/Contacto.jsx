import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormContacto from "../components/FormContacto";

const Contacto = () => {
  return (
    <Container id="contacto">
      <Row className="m-0">
        <Col xs={12} md={6} className="p-0">
          <h2 className="subtitulo">
            CONTA<span>CTO</span>
          </h2>
          <p>
            Envianos tu consulta al formulario <br/> o mediante nuestras redes. <br />
            <strong>Madrid, España</strong>
          </p>
        </Col>
        <Col>
          <FormContacto />
        </Col>
      </Row>
    </Container>
  );
};
export default Contacto;

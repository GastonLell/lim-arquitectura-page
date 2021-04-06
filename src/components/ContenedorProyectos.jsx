import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import dbPrueba from "../dbPrueba/dbPrueba";
// componentes bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContenedorProyectos = ({ modalShow, setModalShow }) => {

  return (
    <Container fluid className="p-6">
      <Row md={3}>
        {dbPrueba.map((item) => {
          return (
            <Col className="mb-3 p-0 text-center">
              <Button variant="outline-ligth" onClick={() => setModalShow(true)}>
                <img src={item.srcImagen} alt={item.nombre} />
              </Button>
            </Col>
          );
        })}
      </Row>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default ContenedorProyectos;
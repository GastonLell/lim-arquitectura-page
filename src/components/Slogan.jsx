import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImgInicio1 from "../assets/images/Renders-inico/Inicio1.jpg";
import ImgInicio2 from "../assets/images/Renders-inico/Inicio2.jpg";
import ImgInicio3 from "../assets/images/Renders-inico/Inicio3.jpg";

import Carousel from "./Carousel";

const items = [
  {
    nombre: "LIM arquitectura",
    categoria: "inicio",
    srcImagen: ImgInicio1,
  },
  {
    nombre: "LIM arquitectura",
    categoria: "inicio",
    srcImagen: ImgInicio2,
  },
  {
    nombre: "LIM arquitectura",
    categoria: "inicio",
    srcImagen: ImgInicio3,
  },
];
const Slogan = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col className="p-0">
          <Carousel items={items} tamaño="w-100"/>
        </Col>
      </Row>
    </Container>
  );
};
export default Slogan;

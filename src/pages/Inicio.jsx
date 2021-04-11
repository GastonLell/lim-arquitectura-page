import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImgInicio1 from "../assets/images/Renders-inico/Inicio1.jpg";
import ImgInicio2 from "../assets/images/Renders-inico/Inicio2.jpg";
import ImgInicio3 from "../assets/images/Renders-inico/Inicio3.jpg";
import ImgLogo from "../assets/images/limArquitectura-negro.svg";

// componentes
import Carousel from "../components/Carousel";
import Slogan from "../components/Slogan";

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
const Inicio = () => {
  return (
    <div id="inicio">
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col className="p-0 carousel-container">
            <Carousel items={items} tamaño="w-100" bsPrefix="carousel" />
            <div className="logo-container">
              <div className="container-logo-uno">
                <div className="logo-uno-i"></div>
                <div className="logo-uno-m"></div>
              </div>
              <div className="img-logo">
                <img src={ImgLogo} alt="lim-arquitectura" />
              </div> 
              <div className="container-logo-dos">
                <div className="logo-uno-i"></div>
                <div className="logo-uno-m"></div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="m-0" bsPrefix="row-slogan">
          <Col className="p-0">
            <Slogan />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Inicio;

import { Container, Row, Col, Carousel } from "react-bootstrap";

import ImgInicio1 from "../assets/images/Renders-inico/Inicio1.jpg";
import ImgInicio2 from "../assets/images/Renders-inico/Inicio2.jpg";
import ImgInicio3 from "../assets/images/Renders-inico/Inicio3.jpg";
import ImgLogo from "../assets/images/limArquitectura-negro.svg";
import ImgSimbolo from "../assets/images/Simbolo-alto.svg";

// componentes
// import Carousel from "../components/Carousel";
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
            <Carousel
              bsPrefix="carousel"
              className="w-100"
              nextIcon={false}
              prevIcon={false}
              indicators={false}
            >
              <Carousel.Item >
                <div id="item-carousel-uno" className="d-block w-100 img-carousel-inicio"/>
              </Carousel.Item>
              <Carousel.Item>
                <div id="item-carousel-dos" className="d-block w-100 img-carousel-inicio" />
              </Carousel.Item>
              <Carousel.Item>
                <div id="item-carousel-tres" className="d-block w-100 img-carousel-inicio"/>
              </Carousel.Item>
            </Carousel>
            <div className="logo-container">
              <div className="img-logo">
                <img src={ImgLogo} alt="lim-arquitectura" />
              </div>
              <div className="inicio__animacion">
                <div className="simbolo-1">
                  <img src={ImgSimbolo} />
                </div>
                <div className="simbolo-2">
                  <img src={ImgSimbolo} />
                </div>
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

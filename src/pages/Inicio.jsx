import { Container, Row, Col, Carousel } from "react-bootstrap";

import ImgLogo from "../assets/images/limArquitectura-negro.svg";
import ImgSimbolo from "../assets/images/Simbolo.svg";

// componentes
import Slogan from "../components/Slogan";

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

import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineBehanceSquare,
} from "react-icons/ai";
import simboloBlanco from "../assets/images/simbolo-blanco.svg";
import behance from "../assets/images/vector behance.jpg";
import instagram from "../assets/images/vector instagram.jpg";
import facebook from "../assets/images/facebook.png";
import linkedin from "../assets/images/linkedin.jpg";

const Footer = () => {
  return (
    <Container fluid id="footer">
      <Row className="px-sm-4">
        <Col sm={6}>
          <img className="footer__logo" src={simboloBlanco} alt="Logo" />
        </Col>

        <Col xs={12} sm={6} className="footer__texto">
          
          <p>También encontranos en</p>

          <div className="footer__redes">
            <a href="#">
              <AiOutlineInstagram />
            </a>
            <a href="#">
              <AiOutlineFacebook />
            </a>
            <a href="#">
              <AiOutlineLinkedin />
            </a>
            <a href="#">
              <AiOutlineBehanceSquare />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

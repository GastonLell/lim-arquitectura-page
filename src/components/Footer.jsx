import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa";
import simboloBlanco from "../assets/images/simbolo-blanco.svg";


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
            <a href="https://www.instagram.com/lim_arquitectura/?igshid=1qjipmho40bqx" target="__blank">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/limarquitecturastudio" target="__blank">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/limarquitectura/" target="__blank">
              <FaLinkedinIn />
            </a>
            <a href="https://www.behance.net/limarquitectura" target="__blank">
              <FaBehance />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

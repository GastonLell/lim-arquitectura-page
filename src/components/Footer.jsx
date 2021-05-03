import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineBehance} from "react-icons/ai";

import { FaLinkedinIn, FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
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
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaBehance />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import simboloBlanco from "../assets/images/simbolo-blanco.svg";
import behance from "../assets/images/vector behance.jpg";
import instagram from "../assets/images/vector instagram.jpg";
import facebook from "../assets/images/facebook.png";
import linkedin from "../assets/images/linkedin.jpg";

const Footer = () => {
    return (

        <Container fluid id="footer">

            <Row className="">

                <Col className="d-flex"><img className="footer__logo" src={simboloBlanco} alt="Logo"/></Col>

                <Col className="footer__textoVectores">

                        <p>También encontranos en</p>
                        
                        <div className="footer__contenedorVectores">
                        <img src={instagram} className="footer__vector mr-2" alt="Instagram"/>
                        <img src={facebook} className="footer__vector mr-2" alt="Facebook"/>
                        <img src={linkedin} className="footer__vector mr-2" alt="Linkedin"/>
                        <img src={behance} className="footer__vector" alt="Behance"/>
                        </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Footer;
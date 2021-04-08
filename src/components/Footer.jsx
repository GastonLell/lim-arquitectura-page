import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoBlanco from "../assets/images/logofooter.svg";
import behance from "../assets/images/vector behance.jpg";
import instagram from "../assets/images/vector instagram.jpg";

const Footer = () => {
    return (

        <Container fluid id="footer">

            <Row className="p-3">

                <Col className=""><img className="footer__logo" src={logoBlanco} alt="Logo"/></Col>

                <Col className="align-self-center footer__alineamiento">
                    <div className="">
                        
                        <p className="d-inline">También encontranos en</p>
                        <img src={instagram} className="footer__vector mx-3 p-1" alt="Instagram"/>
                        <img src={behance} className="footer__vector p-1" alt="Behance"/>
                        
                    </div>
                </Col>
            </Row>
        </Container>
        
        
        
        
        
        
        
        
        
        
        
        // <Container fluid id="footer">

        //     <Row className="">

        //         <div className=""><img className="footer__logo" src={logoBlanco} alt="Logo"/></div>

        //         <div className="align-self-center">
        //             <p>También encontranos en</p>
        //             <img src={instagram} className="footer__vector mx-3 p-1" alt="Instagram"/>
        //             <img src={behance} className="footer__vector p-1" alt="Behance"/>
        //         </div>
        //     </Row>
        // </Container>



    )
}

export default Footer;
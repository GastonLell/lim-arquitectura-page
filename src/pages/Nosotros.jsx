import ellos from "../assets/images/ellos.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nosotros = () => {

  return (

  <Container fluid className="border-top">
    <Container className="miContenedor">
      
      <Row className="mb-3 mb-md-5">

        <Col>
          <h1 className="mb-5">NOSOT<span className="border-bottom border-dark">ROS</span></h1>

          <div className="p-0 nosotrosText">
            <p>Somos Lucila y Mateo, arquitectos que hemos tenido la oportunidad de comenzar nuestras prácticas profesionales ya en los tramos finales de nuestra carrera.</p>
            <p>Eso nos permitió adquirir experiencia en diseño y desarrollo en el terreno, que nos facilitó la decisición de instalarnos en una de las ciudades insignes del mundo, Madrid, permitiéndonos llegar a cualquier parte del mundo.</p>
          </div>
        </Col>

        <Col className="d-flex justify-content-center">
          <img className="nosotros__foto--tamanio" src={ellos} alt="Ellos"/>
        </Col>

      </Row>

    </Container>
  </Container>  

  );
};
export default Nosotros;

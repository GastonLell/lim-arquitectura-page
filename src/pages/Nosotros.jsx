import ellos from "../assets/images/ellos.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nosotros = () => {

  return (

  <Container fluid id="nosotros" className="border-top border-bottom miContenedor">
    <Container className="miContenedor">
      
      <Row className="m-0">

        <Col md={12} lg={6} className="p-0">
          <h2 className="subtitulo">NOSOT<span className="">ROS</span></h2>

          <div className="nosotrosText">
            <p>Somos Lucila y Mateo, arquitectos que hemos tenido la oportunidad de comenzar nuestras prácticas profesionales ya en los tramos finales de nuestra carrera.</p>
            <p>Eso nos permitió adquirir experiencia en diseño y desarrollo en el terreno, que nos facilitó la decisición de instalarnos en una de las ciudades insignes del mundo, Madrid, permitiéndonos llegar a cualquier parte del mundo.</p>
          </div>
        </Col>

        <Col className="d-flex justify-content-center">
          <img className="nosotros__foto--tamanio" src={ellos} alt="LIM Arquitectura - nosotros"/>
        </Col>

      </Row>

    </Container>
  </Container>  

  );
};
export default Nosotros;

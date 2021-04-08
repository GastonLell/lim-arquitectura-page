import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

const Servicios = () => {

  return (

    <Container fluid id="servicios" className="border-top border-bottom miContenedor">
    <Container className="">
      
        <Row className="mb-3 mb-md-5">
        <h2>SERVIC<span className="border-bottom border-dark">IOS</span></h2>
        </Row>

        <Row className="">

          <Col className="">
            <Card className="h-100 serviciosSombra" style={{ width: '21.8rem' }}>
              <Card.Body className="columnaBorderTop p-0">
                <Card.Title className="servicios__miPadding">DISEÑO ARQUITECTONICO Y DE INTERIORES</Card.Title>
                <div className="border w-75"></div>
                <Card.Text className="servicios__miPadding">
                  <p>Desarrollamos el proyecto desde lo general a lo particular.</p>
                  <p>Nos hacemos cargo del diseño de interiores de cada proyecto, de forma personalizada.</p>
                  <p>Diseñamos a medida para cada cliente, ya sea para obras nuevas ejecutadas por nosotros, como también para viviendas, locales y oficinas ya existentes.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="">
          <Card className="h-100 serviciosSombra" style={{ width: '21.8rem' }}>
              <Card.Body className="columnaBorderTop p-0">
                <Card.Title className="servicios__miPadding">COMUNICACIÓN ARQUITECTÓNICA</Card.Title>
                <div className="border w-75"></div>
                <Card.Text className="servicios__miPadding">
                  <p>Diseñamos presentaciones de proyectos en sistemas BIM para estudios profesionales e inmobiliarios.</p>
                  <p>Ofrecemos diferentes alternativas para la necesidad de cada cliente.</p>
                  <p>Contamos con profesionales capaces de realizar imágenes y vidéos realistas de tu proyecto.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="">
          <Card className="h-100 serviciosSombra" style={{ width: '21.8rem' }}>
              <Card.Body className="columnaBorderTop p-0">
                <Card.Title className="servicios__miPadding">PROJECT MANAGMENT</Card.Title>
                <div className="border w-75"></div>
                <Card.Text className="servicios__miPadding">
                  <p>Nos encargamos de la coordinación, control de calidad e implicación durante todo el proceso de obra de los profesionales, contratistas y/o subcontratistas.</p>
                  <p>Agilizando los tiempos y liberando al cliente de esta tarea.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
    </Container>
    </Container>
  );
};
export default Servicios;
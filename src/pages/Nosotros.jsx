import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Nosotros = () => {

  return (

    <Container>
        <Row className="mb-3 mb-md-5">
        <h2>NOSOT<span className="border-bottom border-dark">ROS</span></h2>
        </Row>
        <Row className="w-50">
          <Col className="px-0">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis provident, optio ut quia excepturi recusandae ratione assumenda ab molestias, consequuntur earum rem ducimus exercitationem quas possimus quod dignissimos eveniet doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil vitae veniam perferendis iste repudiandae voluptatum, aut provident quidem rem minus sit ipsam perspiciatis. Cumque ex iusto magni numquam? Facilis, fugit eveniet natus officiis consectetur nemo fuga nobis dolorem impedit! Lorem ipsum dolor.</p>
          </Col>
        </Row>
    </Container>

  );
};
export default Nosotros;

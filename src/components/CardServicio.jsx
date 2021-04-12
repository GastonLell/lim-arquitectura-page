import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CardServicio = ({title, textoUno, textoDos, textoTres}) => {
  return (
    <Col xs={12} lg={4} className="mb-5 mb-lg-0 d-flex justify-content-center">
      <Card className="serviciosSombra" style={{ width: "21.8rem" }}>
        <Card.Body className="columnaBorderTop p-0 servicios__alto">
          <Card.Title className="servicios__padding">
            {title}
          </Card.Title>
          <div className="border border-dark w-75"></div>
          <Card.Text className="servicios__padding">
            <p>{textoUno}</p>
            <p>{textoDos}</p>
            <p>{textoTres}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardServicio;

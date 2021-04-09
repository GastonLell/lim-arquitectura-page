import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CardServicio = ({title, textoUno, textoDos, textoTres}) => {
  return (
    <Col className="mb-3">
      <Card className="h-100 serviciosSombra" style={{ width: "21.8rem" }}>
        <Card.Body className="columnaBorderTop p-0">
          <Card.Title className="servicios__miPadding">
            {title}
          </Card.Title>
          <div className="border border-dark w-75"></div>
          <Card.Text className="servicios__miPadding">
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

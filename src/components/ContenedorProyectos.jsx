import { useEffect, useState } from "react";

import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import Carousel from "./Carousel";
import dbPrueba from "../dbPrueba/dbPrueba";
// componentes bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContenedorProyectos = ({ modalShow, setModalShow, categoria }) => {
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState(0);
  //const [images, setSrcImagenes] = useState([]);

  const openModal = (id) => {
    setItemId(id)
    setModalShow(true)
    console.log(itemId)
  }
  const mostrarItems = () => {
    if (categoria === "renders") {
      let arrayItems = dbPrueba.filter((item) => item.categoria === "renders");
      setItems(arrayItems);
    } else if (categoria === "videos") {
      let arrayItems = dbPrueba.filter((item) => item.categoria === "videos");
      setItems(arrayItems);
    } else if (categoria === "realidad") {
      let arrayItems = dbPrueba.filter((item) => item.categoria === "realidad");
      setItems(arrayItems);
    } else {
      let arrayItems = dbPrueba;
      setItems(arrayItems);
    }
  };

  useEffect(() => {
    mostrarItems();
  }, [categoria]);

  return (
    <Container fluid className="contenedor-proyectos">
      <Row md={3}>
        {items.map((item) => {
          return (
            <Col className="mb-3 p-0 text-center">
              <Button
                variant="outline-ligth"
                onClick={() => openModal(item.id)}
              >
                <img src={item.srcImagen} alt={item.nombre} />
              </Button>
            </Col>
          );
        })}
      </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        items={items}
        itemId={itemId}
      />
        
    </Container>
  );
};

export default ContenedorProyectos;

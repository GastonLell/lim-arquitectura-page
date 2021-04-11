import { useEffect, useState } from "react";

import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

// componentes bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getData } from "../firebase/client";
const ContenedorProyectos = ({ modalShow, setModalShow, categoria }) => {

  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItems(getData);
    console.log(items)
  }, []);

  const openModal = (id) => {
    let item = items.find(item => item.id == id)
    setItem(item)
    setModalShow(true);
  };

  return (
    <Container fluid className="contenedor-proyectos">

      <Row xs={1} md={2} lg={3}>
        {items.map((item) => {
          return (
            <Col className="mb-3 p-0 text-center">
              <Button
                variant="outline-ligth"
                onClick={() => openModal(item.id)}
              >
                <img
                  className="w-100"
                  src={item.data.srcImagen[0]}
                  alt={item.data.nombre}
                />
              </Button>

            </Col>
            
          );
        })}
      </Row>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={item.data}
      />
    </Container>
  );
};

export default ContenedorProyectos;

/*
PARA CAMBIO DE CATEGORIAS
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
}, [categoria]); */

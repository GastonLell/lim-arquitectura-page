import { useEffect, useState, useContext } from "react";
import { StoreProyectos } from "../store/ProyectosContext";

import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import Loading from "./Loading";
// componentes bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContenedorProyectos = ({ modalShow, setModalShow, categoria }) => {
  const [proyectos] = useContext(StoreProyectos);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);

  const openModal = (id) => {
    let item = items.find((item) => item.id == id);
    setItem(item);
    setModalShow(true);
  };

  const obtenerProyectos = () => {
    setItems(proyectos);
  };

  useEffect(() => {
    obtenerProyectos();
    console.log("use effect contenedor proyectos")
    
  }, [proyectos]);

  return (
    <Container fluid className="contenedor-proyectos">
      {!!items ? (
        <Row xs={1} md={2} lg={3}>
          {items.map((item) => {
            return (
              <Col key={item.id} className="mb-3 p-0 text-center">
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
      ) : (
        <Loading />
      )}
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

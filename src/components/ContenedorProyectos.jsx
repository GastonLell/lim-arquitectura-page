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
    if (categoria === "renders") {
      let arrayItems = proyectos.filter(
        (item) => item.data.categoria === "renders"
      );
      setItems(arrayItems);
    } else if (categoria === "videos") {
      let arrayItems = proyectos.filter(
        (item) => item.data.categoria === "videos"
      );
      setItems(arrayItems);
    } else if (categoria === "realidad") {
      let arrayItems = proyectos.filter(
        (item) => item.categoria === "realidad"
      );
      setItems(arrayItems);
    } else {
      let arrayItems = proyectos;
      setItems(arrayItems);
    }
  };

  useEffect(() => {
    obtenerProyectos();
    console.log("use effect contenedor proyectos");
  }, [proyectos, categoria]);

  return (
    <Container fluid className="contenedor-proyectos">
      {!!items ? (
        <Row xs={1} md={2} lg={3}>
          {items.map((item) => {
            return (
              <Col key={item.id} className="mb-3 p-0 text-center">
                <Button variant="outline-ligth" onClick={() => openModal(item.id)}>
                  {
                    item.data.categoria !== "realidad" ? (
                      <img
                        className="w-100"
                        src={item.data.srcImagen[0]}
                        alt={item.data.nombre}
                      />) : (
                        <video className="video-list-proyectos" >
                          <source src={item.data.srcImagen[0]} type="video/mp4" />
                        </video>
                      )
                  }

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

  }
};

useEffect(() => {
  mostrarItems();
}, [categoria]); */

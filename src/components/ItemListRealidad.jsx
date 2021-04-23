import { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";

const ItemListRealidad = ({ items, openModal }) => {
  const [proyectosRealidad, setProyectosRealidad] = useState([]);

  const obtenerRealidad = () => {
    const arrRealidad = items.filter(
      (item) => item.data.categoria === "realidad"
    );
    setProyectosRealidad(arrRealidad);
  };
  useEffect(() => {
    obtenerRealidad();
  }, [items]);

  return (
    <>
      <Row xs={1} md={2} lg={3}>
        {proyectosRealidad?.map((item) => {
          return (
            <Col key={item.id} className="mb-3 p-0 text-center">
              <Button
                variant="outline-ligth"
                onClick={() => openModal(item.id)}
              >
                <img
                  className="button-img-proyectos"
                  src={item.data.srcImagenPortada}
                  alt={item.data.nombre}
                />
              </Button>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default ItemListRealidad;

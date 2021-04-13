import {useState, useEffect} from "react";
import {Button, Row, Col} from "react-bootstrap";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

const ContenedorRealidad = ({items, openModal}) => {
    const [proyectosRealidad, setProyectosRealidad] = useState([]);

    const obtenerRealidad = () => {
        const arrRealidad = items.filter(item => item.data.categoria === "realidad");
        setProyectosRealidad(arrRealidad);
    }
    useEffect(() => {
      obtenerRealidad();
    }, [items])

    return(
      <>
      <Row xs={1} md={2} lg={3}>
				<Col lg={12}><h3>Contenedor realidad</h3></Col>
        {
          proyectosRealidad?.map((item) => {
            return (
              <Col key={item.id} className="mb-3 p-0 text-center">
                <Button variant="outline-ligth" onClick={() => openModal(item.id)}>     
                  <video className="video-list-proyectos" >
                    <source src={item.data.srcImagen} type="video/mp4" />
                  </video>
                </Button>
              </Col>
            )})
        }
      </Row>

      </>
    )
}
export default ContenedorRealidad;
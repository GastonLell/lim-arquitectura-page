import {useState, useEffect} from "react";
import {Button, Row, Col} from "react-bootstrap";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

const ContenedorRenders = ({items, openModal}) => {
    const [proyectosRenders, setProyectosRenders] = useState([]);

    const obtenerRenders = () => {
        const arrRenders = items.filter(item => item.data.categoria === "renders");
        setProyectosRenders(arrRenders);
    }
    useEffect(() => {
        obtenerRenders();
    }, [items])

    return(
			<>
      <Row xs={1} md={2} lg={3}>
        {
          proyectosRenders?.map((item) => {
            return (
              <Col key={item.id} className="mb-3 p-0 text-center">
                <Button variant="outline-ligth" onClick={() => openModal(item.id)}>     
                	<img
                	  className="button-img-proyectos"
                	  src={item.data.srcImagen}
                	  alt={item.data.nombre}
                	/>
                </Button>
              </Col>
            )})
        }
      </Row>

			</>
    )
}
export default ContenedorRenders;
import {useState, useEffect} from "react";
import {Button, Row, Col} from "react-bootstrap";

const ItemListVideos = ({items, openModal}) => {
    const [proyectosVideos, setProyectosVideos] = useState([]);

    const obtenerVideos = () => {
        const arrVideos = items.filter(item => item.data.categoria === "videos");
        setProyectosVideos(arrVideos);
    }
    useEffect(() => {
      obtenerVideos();
    }, [items])

    return(
      <>
      <Row xs={1} md={2} lg={3}>
        {
          proyectosVideos?.map((item) => {
            return (
              <Col key={item.id} className="mb-3 p-0 text-center">
                <Button variant="outline-ligth" onClick={() => openModal(item.id)}>     
                  <video className="video-list-proyectos" preload>
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
export default ItemListVideos;
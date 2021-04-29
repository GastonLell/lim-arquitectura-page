import { useEffect, useState, useContext } from "react";
import { StoreProyectos } from "../store/ProyectosContext";

import ItemListRenders from "./ItemListRenders";
import ItemListVideos from "./ItemListVideos";
import ItemListRealidad from "./ItemListRealidad";

import Loading from "./Loading";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
// componentes bootstrap
import {Container} from "react-bootstrap";

const ContenedorProyectos = ({ modalShow, setModalShow, categoria }) => {
  const [proyectos] = useContext(StoreProyectos);
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState(0);

  const openModal = (id) => {
    setItemId(id)
    setModalShow(true);
  };

  const obtenerProyectos = () => {
    let arrayItems = proyectos;
    if(arrayItems){
      if(categoria === "renders"){
        let arrFilt = arrayItems.filter(item => item.data.categoria === "renders")
        setItems(arrFilt);
      }
      if(categoria === "videos"){
        let arrFilt = arrayItems.filter(item => item.data.categoria === "videos")
        setItems(arrFilt);
      }
      if(categoria === "realidad"){
        let arrFilt = arrayItems.filter(item => item.data.categoria === "realidad")
        setItems(arrFilt);
      }
    }
  };

  useEffect(() => {
    obtenerProyectos();
  }, [proyectos, categoria]);

  return (
    <Container fluid className="contenedor-proyectos">
      {!!items ? (
        <>
          <ItemListRenders itemId={itemId} openModal={openModal} modalShow={modalShow} setModalShow={setModalShow} items={items} />
          <ItemListVideos itemId={itemId} openModal={openModal} modalShow={modalShow} setModalShow={setModalShow} items={items}/>
          <ItemListRealidad itemId={itemId} openModal={openModal} modalShow={modalShow} setModalShow={setModalShow} items={items} />
        </>
      ) : (
        <Loading />
      )}
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

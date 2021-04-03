import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import dbPrueba from "../dbPrueba/dbPrueba";

const ItemsProyecto = ({ categoria }) => {
  const [items, setItems] = useState([]);
  const [images, setSrcImagenes] = useState([]);

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

  useEffect(() => {
    let srcImagenes = items.map((item) => ({
      src: item.srcImagen,
    }));
    setSrcImagenes(srcImagenes);
  }, [items]);

  return <Carousel />;
};
export default ItemsProyecto;

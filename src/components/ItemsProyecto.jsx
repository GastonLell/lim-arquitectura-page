import { useEffect, useState } from "react";
import dbPrueba from "../dbPrueba/dbPrueba";

const ItemsProyecto = ({ categoria }) => {
  const [items, setItems] = useState([]);

  const mostrarItems = () => {
    if (categoria === "render") {
      let arrayItems = dbPrueba.filter((item) => item.categoria === "render");
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
    <>
      {items.map((item) => {
        return <img src={item.srcImagen} alt={item.nombre} />;
      })}
    </>
  );
};
export default ItemsProyecto;
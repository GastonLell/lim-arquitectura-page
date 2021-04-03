import { useState } from "react";
import ItemsProyecto from "../components/ItemsProyecto";

const Proyectos = () => {
  const [categoria, setCategoria] = useState("todo");

  const cambiarCategoria = (e) => {
    setCategoria(e.target.attributes.value.nodeValue);
  };

  return (

    <section id="proyectos">

      <h2 className="subtitulos">
        PROYEC<span>TOS</span>
      </h2>

      <div className="nav-proyectos">

        <ul>
          <button className={categoria === "renders" ? "active" : ""} onClick={cambiarCategoria} value="renders">
            Renders
          </button>
          <button className={categoria === "videos" ? "active" : ""} onClick={cambiarCategoria} value="videos">
            Videos
          </button>
          <button className={categoria === "realidad" ? "active" : ""} onClick={cambiarCategoria} value="realidad">
            Realidad virtual
          </button>
        </ul>

      </div>

      <div className="proyectos-contenedor">
        <ItemsProyecto categoria={categoria} />
      </div>
      
    </section>
  );
};
export default Proyectos;

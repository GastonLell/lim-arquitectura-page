import { useState } from "react";
import ContenedorProyectos from "../components/ContenedorProyectos";
// componentes bootstrap
import Container from "react-bootstrap/Container";

const Proyectos = () => {
  const [modalShow, setModalShow] = useState(false);

  const [categoria, setCategoria] = useState("todo");

  const cambiarCategoria = (e) => {
    setCategoria(e.target.attributes.value.nodeValue);
  };

  return (
    <section id="proyectos">
      <Container className="p-0">
        <h2 className="subtitulo">
          PROYEC<span>TOS</span>
        </h2>

        <div className="nav-proyectos">
          <ul>
            <button
              className={categoria === "renders" ? "active" : ""}
              onClick={cambiarCategoria}
              value="renders"
            >
              Renders
            </button>

            <button
              className={categoria === "videos" ? "active" : ""}
              onClick={cambiarCategoria}
              value="videos"
            >
              Videos
            </button>

            <button
              className={categoria === "realidad" ? "active" : ""}
              onClick={cambiarCategoria}
              value="realidad"
            >
              Realidad virtual
            </button>
          </ul>
        </div>
      </Container>
      <ContenedorProyectos
        modalShow={modalShow}
        setModalShow={setModalShow}
        categoria={categoria}
      />
    </section>
  );
};
export default Proyectos;

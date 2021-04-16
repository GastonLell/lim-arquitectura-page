import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";

import CardServicio from "../components/CardServicio";

const Servicios = () => {
  return (
    <Container fluid id="servicios" className="border-top border-bottom miContenedor">
      <Container className="p-0">
        {/* <Row className=""> */}
          <h2 className="subtitulo">SERVIC<span>IOS</span>
          </h2>
        {/* </Row> */}

        <Row>
          <CardServicio
            title="DISEÑO ARQUITECTONICO Y DE INTERIORES"
            textUno="Desarrollamos el proyecto desde lo general a lo particular."
            textoDos="Nos hacemos cargo del diseño de interiores de cada proyecto,
            de forma personalizada."
            textoTres="Diseñamos a medida para cada cliente, ya sea para obras
            nuevas ejecutadas por nosotros, como también para viviendas,
            locales y oficinas ya existentes."
          />
          <CardServicio
            title="COMUNICACIÓN ARQUITECTÓNICA"
            textoUno="Diseñamos presentaciones de proyectos en sistemas BIM para
            estudios profesionales e inmobiliarios"
            textoDos="Ofrecemos diferentes alternativas para la necesidad de cada
            cliente."
            textoTres="Contamos con profesionales capaces de realizar imágenes y
            vidéos realistas de tu proyecto."
          />
          <CardServicio
            title="PROJECT MANAGMENT"
            textoUno="Nos encargamos de la coordinación, control de calidad e
            implicación durante todo el proceso de obra de los profesionales, contratistas y/o subcontratistas."
            textoDos="Agilizando los tiempos y liberando al cliente de esta tarea."
            textoTres=""
          />
        </Row>
      </Container>
    </Container>
  );
};
export default Servicios;

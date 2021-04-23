import { Carousel } from "react-bootstrap";
// import PhotoPano from "./ImagenPano";
// import srcPano from "../assets/images/p360.jpg";

const CarouselProyectos = ({itemId, items }) => {
  
  const obtenerIndice = (id) => {
    let indice = items.findIndex(el => el.id == id);
    return indice;
  }

  if (items) {
    return (
      <Carousel className="w-100" defaultActiveIndex={() => obtenerIndice(itemId)} indicators={false}>
        {
          items.map((item) => {
            
              if (item.data.categoria == "renders") {
                return(
                  <Carousel.Item key={item.id} >
                    <img  className="d-block w-100 img-carousel-proyectos" src={item.data.srcImagen} alt={item.data.nombre} />
                  </Carousel.Item>
                )
              } else if (item.data.categoria == "videos") { 
                return (
                  <Carousel.Item key={item.id} >
                    <video className="video-carousel-proyecto" controls >
                      <source src={item.data.srcImagen} type="video/mp4" />
                    </video>   
                  </Carousel.Item>
                )
              } else if (item.data.categoria == "realidad"){
                return(
                  <Carousel.Item key={item.id}>
                    <iframe className="img-carousel-realidad" frameborder="0" src="https://momento360.com/e/u/412757d846074cd6ae3ae72e603693c4?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"></iframe>
                  </Carousel.Item>
                )
              }
          })
        }
      </Carousel>
    );
  } 
};

export default CarouselProyectos;

/* 
{
  item.categoria !== "realidad" ? (
  item?.srcImagen.map((item, index) => {
  return (
    <Carousel.Item key={index}>
      <img className="d-block w-100 img-carousel-proyectos" src={item} />
    </Carousel.Item>
  );
})) : (
  item?.srcImagen.map((item, index) => {
    return(
    <Carousel.Item key={index}>
      <video className="video-carousel-proyecto" controls >
        <source src={item} type="video/mp4" />
      </video>
    </Carousel.Item>
    )})
)

} */
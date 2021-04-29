import { Carousel } from "react-bootstrap";

const CarouselProyectos = ({itemId, items }) => {
  
  const obtenerIndice = (id) => {
    let indice = items.findIndex(el => el.id == id);
    return indice;
  }

  if (items) {
    return (
      <Carousel className="w-100"
      defaultActiveIndex={() => obtenerIndice(itemId)}
      indicators={false}
      interval={null}
      >
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
                    <video className="video-carousel-proyecto" controls autoPlay>
                      <source src={item.data.srcImagen} type="video/mp4" />
                    </video>   
                  </Carousel.Item>
                )
              } else if (item.data.categoria == "realidad"){
                return(
                  <Carousel.Item key={item.id}>
                    <iframe className="img-carousel-realidad" frameborder="0" src={item.data.srcImagen} ></iframe>
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
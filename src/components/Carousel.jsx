import { Carousel } from "react-bootstrap";

const CarouselProyectos = ({ item, itemsCarousel }) => {
  if (item) {
    return (
      <Carousel className="w-100" indicators={false}>
        {item?.srcImagen.map((item, index) => {
          
          return (
            <Carousel.Item key={index}>
              <img className="d-block w-100 img-carousel-proyectos" src={item} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  } else if (itemsCarousel) {
    return (
      <Carousel className="w-100" nextIcon={false} prevIcon={false} indicators={false}>
        {itemsCarousel.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img className="d-block w-100 img-carousel-inicio" src={item.srcImagen} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
};

export default CarouselProyectos;

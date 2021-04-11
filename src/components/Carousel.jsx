import { Carousel } from "react-bootstrap";

const CarouselProyectos = ({ item, itemsCarousel, tamaño }) => {
  if (item) {
    return (
      <Carousel className={`${tamaño}`} indicators={false}>
        {item?.srcImagen.map((item) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={item} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  } else if (itemsCarousel) {
    return (
      <Carousel className={`${tamaño}`} indicators={false}>
        {itemsCarousel.map((item) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={item.srcImagen} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
};

export default CarouselProyectos;

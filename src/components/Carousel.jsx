import { Carousel } from "react-bootstrap";
import imagen from "../assets/images/Lucila.jpg";

const CarouselProyectos = () => {
  return (
    <Carousel className="w-75">
      <Carousel.Item>
        <img className="d-block w-100" src={imagen} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imagen} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imagen} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imagen} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselProyectos;

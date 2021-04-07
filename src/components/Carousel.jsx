import {useState } from 'react';
import { Carousel } from "react-bootstrap";

const CarouselProyectos = ({ items = [], itemId }) => {

  return (
    //probar si se selecciona automaticamente la imagen sin el renderizado condicional
    <Carousel className="w-75" nextIcon prevIcon indicators={false}  >
      {itemId ? (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={items[itemId].srcImagen}
            alt={items[itemId].nombre}
          />
        </Carousel.Item>
      ) : (
        items.map((item) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.srcImagen}
                alt={item.nombre}
              />
            </Carousel.Item>
          );
        })
      )}
    </Carousel>
  );
};

export default CarouselProyectos;

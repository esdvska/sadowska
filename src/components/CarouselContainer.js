import React from "react";
import { Carousel } from "react-bootstrap";

import car1 from "../images/carousel/car1.jpg";
import car2 from "../images/carousel/car2.jpg";
import car3 from "../images/carousel/car3.jpg";

import "../styles/Carousel.css";

const CarouselContainer = () => {
  return (
    <Carousel controls={false} fade={true} pause={false} indicators={false}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-img"
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-img"
          src={car2}
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-img"
          src={car3}
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselContainer;

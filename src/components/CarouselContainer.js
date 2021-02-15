import React from "react";
import { Carousel } from "react-bootstrap";

import car1 from "../images/carousel/fotografia_slubna_bialystok_01.jpg";
import car2 from "../images/carousel/fotografia_slubna_bialystok_02.jpg";
import car3 from "../images/carousel/fotografia_slubna_bialystok_03.jpg";
import car4 from "../images/carousel/fotografia_slubna_bialystok_04.jpg";
import car5 from "../images/carousel/fotografia_slubna_bialystok_05.jpg";
import car6 from "../images/carousel/fotografia_slubna_bialystok_06.jpg";
import car7 from "../images/carousel/fotografia_slubna_bialystok_07.jpg";
import car8 from "../images/carousel/fotografia_slubna_bialystok_08.jpg";
import car9 from "../images/carousel/fotografia_slubna_bialystok_09.jpg";
import car10 from "../images/carousel/fotografia_slubna_bialystok_10.jpg";

import "../styles/Carousel.css";

const CarouselContainer = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel controls={false} fade={true} pause={false} indicators={false}>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={car1}
            alt="Plener ślubny Jałówka"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={car2}
            alt="Wesele Hotel Traugutta Białystok"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={car3} alt="Plener ślubny" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={car4}
            alt="Plener ślubny jesienny"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={car5}
            alt="Ślub Plenerowy Święta Woda"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={car6}
            alt="Plener ślubny w ruinach"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={car7} alt="Sesja narzeczeńska" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={car8} alt="Panna Młoda" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={car9} alt="Zdjęcie grupowe" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={car10} alt="Samochód do ślubu" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CarouselContainer;

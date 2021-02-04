import React, { useEffect } from "react";

import car1 from "../images/carousel/car1.jpg";
import car2 from "../images/carousel/car2.jpg";
import car3 from "../images/carousel/car3.jpg";

import "../styles/Home.css";
const Home = () => {
  const slideImages = [car1, car2, car3];
  const time = 5000;
  let active = 0;
  let imageSrc = `car ${active}`;

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide();
    }, time);
    return () => clearInterval(interval);
  });
  const changeSlide = () => {
    active++;
    if (active === slideImages.length) {
      active = 0;
    }
    imageSrc = slideImages[active];
    console.log(imageSrc);
  };
  return (
    <div className="carousel-slide">
      <div className="carousel-inner">
        <div className="carousel-item-active">
          <img
            className="carousel-image"
            src={imageSrc}
            alt="fotografia_slubna"
          />
        </div>
        {/* <div className="carousel-item">
          <img className="carousel-image" src={car2} alt="fotografia_slubna" />
        </div>
        <div className="carousel-item">
          <img className="carousel-image" src={car3} alt="fotografia_slubna" />
        </div> */}
      </div>
    </div>
  );
  //   <div className="carousel-slide">
  //   <div className="carousel-inner">
  //     <div className="carousel-item active">
  //       <img src={car1} alt="First slide">
  //     </div>
  //     <div className="carousel-item">
  //       <img  src={car2} alt="Second slide">
  //     </div>
  //     <div className="carousel-item">
  //       <img  src={car3} alt="Third slide">
  //     </div>
  //   </div>
  // </div>)
};

export default Home;

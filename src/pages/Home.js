import React, { useEffect, useState } from "react";

import car1 from "../images/carousel/car1.jpg";
import car2 from "../images/carousel/car2.jpg";
import car3 from "../images/carousel/car3.jpg";

import "../styles/Home.css";
const Home = () => {
  const slideImages = [car1, car2, car3];

  const time = 5000;
  const [activeImg, setActiveImg] = useState(0);
  let imageSrc = slideImages[activeImg];
  const len = slideImages.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg(activeImg === len ? 0 : activeImg + 1);
      console.log(imageSrc);
    }, time);

    return () => clearInterval(interval);
  }, [activeImg]);

  return (
    <div className="carousel-slide">
      <div className="carousel-inner">
        <div className="carousel-image">
          <img
            src={imageSrc}
            className="carousel-image"
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

import React, { useState } from "react";

import "../styles/Offer.css";

import img1 from "../images/offer/plener_slubny_bialystok_01.jpg";
import img2 from "../images/offer/plener_slubny_bialystok_02.jpg";
import img3 from "../images/offer/plener_slubny_bialystok_03.jpg";

import OfferStandard from "../components/OfferStandard";
import OfferPremium from "../components/OfferPremium";
import OfferBasic from "../components/OfferBasic";

import Faqs from "../components/Faq";

const Offer = () => {
  const [hoverStandard, setHoverStandard] = useState(false);

  const handleMouseStandard = () => {
    setHoverStandard((prev) => !prev);
  };
  const [hoverPremium, setHoverPremium] = useState(false);

  const handleMousePremium = () => {
    setHoverPremium((prev) => !prev);
  };
  const [hoverBasic, setHoverBasic] = useState(false);

  const handleMouseBasic = () => {
    setHoverBasic((prev) => !prev);
  };
  const hoverElementStandard = hoverStandard ? (
    <OfferStandard />
  ) : (
    <h1>
      Pakiet
      <br />
      Standard
    </h1>
  );
  const hoverElementPremium = hoverPremium ? (
    <OfferPremium />
  ) : (
    <h1>
      Pakiet
      <br />
      Premium
    </h1>
  );
  const hoverElementBasic = hoverBasic ? (
    <OfferBasic />
  ) : (
    <h1>
      Pakiet
      <br />
      Basic
    </h1>
  );
  return (
    <div className="offer_wrapper">
      <div className="offer">
        <p>
          Dzień ślubu to bardzo ważne wydarzenie w Waszym życiu. Każdy z Was ma
          inne potrzeby i oczekiwania odnośnie fotografa ślubnego, dlatego
          oferta jest zawsze dopasowana do Waszych potrzeb.{" "}
        </p>
        <p>Poniżej możecie zapoznać się z trzema podstawowymi pakietami.</p>
        <p>
          Do każdego z nich możecie zamówić sesję narzeczeńską - na której mamy
          się okazję bliżej poznać.
        </p>
        <p>
          {" "}
          Dzięki sesji narzeczeńskiej możecie zobaczyć jak pracuje, poczuć się
          swobodniej przed obiektywem - dzięki temu w dniu ślubu nie stresujecie
          się przynajmniej tym jednym aspektem.
        </p>
        <p>
          Zapraszam do kontaktu - chętnie omówię z Wami wszystkie szczegóły
          Waszego wyjątkowego dnia.{" "}
        </p>
      </div>
      <div className="photos_offer">
        <div
          className="contain_overlay"
          onMouseEnter={handleMouseStandard}
          onMouseLeave={handleMouseStandard}
        >
          <div className="overlay">
            <img src={img2} alt="oferta śłubna"></img>
            {hoverElementStandard}
          </div>
        </div>
        <div
          className="contain_overlay"
          onMouseEnter={handleMousePremium}
          onMouseLeave={handleMousePremium}
        >
          <div className="overlay">
            <img src={img1} alt="oferta śłubna"></img>
            {hoverElementPremium}
          </div>
        </div>
        <div
          className="contain_overlay"
          onMouseEnter={handleMouseBasic}
          onMouseLeave={handleMouseBasic}
        >
          <div className="overlay">
            <img src={img3} alt="oferta śłubna"></img>
            {hoverElementBasic}
          </div>
        </div>
      </div>

      <Faqs />
    </div>
  );
};
export default Offer;

import React, { useState } from "react";

import "../styles/Offer.css";

import img1 from "../images/offer/fotograf_slubny_bialystok_oferta_01.jpg";
import img2 from "../images/offer/fotograf_slubny_bialystok_oferta_02.jpg";
import img3 from "../images/offer/fotograf_slubny_bialystok_oferta_03.jpg";

import OfferStandard from "../components/OfferStandard";
import OfferPremium from "../components/OfferPremium";
import OfferBasic from "../components/OfferBasic";

import Faqs from "../components/Faq";
import ButtonInTouch from "../components/ButtonInTouch";

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
  const handleResetHover = () => {
    if (hoverStandard) {
      setHoverStandard(false);
    }
    if (hoverPremium) {
      setHoverPremium(false);
    }
    if (hoverBasic) {
      setHoverBasic(false);
    }
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
    <>
      <div className="offer_wrapper" onClick={handleResetHover}>
        <div className="offer">
          <p>
            <strong>Dzień ślubu</strong> to bardzo ważne wydarzenie w Waszym
            życiu. Każdy z Was ma inne potrzeby i oczekiwania odnośnie{" "}
            <strong>fotografa ślubnego,</strong> dlatego oferta jest zawsze
            dopasowana do Waszych potrzeb. Poniżej możecie zapoznać się z trzema
            podstawowymi pakietami. Do każdego z nich możecie zamówić sesję
            narzeczeńską - na której mamy się okazję bliżej poznać.{" "}
          </p>
          <p>
            <strong>Sesja narzeczeńska</strong> pozwali Wam zobaczyć jak
            pracuje, pozwoli poczuć się swobodniej przed obiektywem - dzięki
            temu <strong>w dniu ślubu</strong> nie stresujecie się przynajmniej
            tym jednym aspektem. Zapraszam do kontaktu - chętnie omówię z Wami
            wszystkie szczegóły Waszego wyjątkowego dnia.{" "}
          </p>
        </div>
        <div className="photos_offer">
          <div
            className="contain_overlay"
            onMouseEnter={handleMouseStandard}
            onMouseLeave={handleMouseStandard}
            onClick={handleMouseStandard}
          >
            <div className="overlay">
              <img src={img1} alt="oferta śłubna"></img>
              {hoverElementStandard}
            </div>
          </div>
          <div
            className="contain_overlay"
            onMouseEnter={handleMousePremium}
            onMouseLeave={handleMousePremium}
            onClick={handleMousePremium}
          >
            <div className="overlay">
              <img src={img2} alt="oferta śłubna"></img>
              {hoverElementPremium}
            </div>
          </div>
          <div
            className="contain_overlay"
            onMouseEnter={handleMouseBasic}
            onMouseLeave={handleMouseBasic}
            onClick={handleMouseBasic}
          >
            <div className="overlay">
              <img src={img3} alt="oferta śłubna"></img>
              {hoverElementBasic}
            </div>
          </div>
        </div>

        <Faqs />
      </div>
      <div>
        <ButtonInTouch />
      </div>
    </>
  );
};
export default Offer;

import React from "react";

import "../styles/Offer.css";

import img1 from "../images/offer/plener_slubny_bialystok_01.jpg";
import img2 from "../images/offer/plener_slubny_bialystok_02.jpg";
import img3 from "../images/offer/plener_slubny_bialystok_03.jpg";

const Offer = () => {
  return (
    <div>
      <div className="offer">
        <p>
          Dzień ślubu to bardzo ważne wydarzenie w Waszym życiu. Każdy z Was ma
          inne potrzeby i oczekiwania odnośnie fotografa ślubnego, dlatego
          oferta jest zawsze dopasowana do Waszych potrzeb. Poniżej możecie
          zapoznać się z trzema podstawowymi pakietami.
        </p>
        <p>
          Do każdego z nich możecie zamówić sesję narzeczeńską - na której mamy
          się okazję bliżej poznać. Dzięki sesji narzeczeńskiej możecie zobaczyć
          jak pracuje, poczuć się swobodniej przed obiektywem - dzięki temu w
          dniu ślubu nie stresujecie się przynajmniej tym jednym aspektem.
        </p>
        <p>
          Zapraszam do kontaktu - chętnie omówię z Wami wszystkie szczegóły
          Waszego wyjątkowego dnia.{" "}
        </p>
      </div>
      <div className="photos_offer">
        <div>
          <img src={img2} alt="oferta śłubna"></img>
        </div>
        <div>
          {" "}
          <img src={img1} alt="oferta śłubna"></img>
        </div>
        <div>
          {" "}
          <img src={img3} alt="oferta śłubna"></img>
        </div>
      </div>
    </div>
  );
};
export default Offer;

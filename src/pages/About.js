import React from "react";
import { useMediaQuery } from "react-responsive";

import "../styles/About.css";

import profile from "../images/ewelina_sadowska_fotograf.jpg";
import ButtonInTouch from "../components/ButtonInTouch";
const About = () => {
  const isSmall = useMediaQuery({ query: "(min-width:800px" });

  return (
    <>
      <div className="about">
        <div className="info">
          <h1>FOTOGRAF PEŁEN POMYSŁÓW</h1>
          <p>
            Dziękuje, że tu jesteście, mam na imię Ewelina i jestem{" "}
            <strong>fotografem ślubnym.</strong> Na co dzień mieszkam{" "}
            <strong>w Białymstoku</strong>, ale mogę być z Wami tam gdzie tylko
            sobie wymarzyliście ślub. Zawsze uśmiechnięta, otwarta na Wasze
            propozycje - nawet te najbardziej szalone.{" "}
            <strong>Pełna pozytywnej energii</strong>, którą się chętnie z Wami
            podzielę.{" "}
          </p>
          <p>
            <strong>Pasja fotograficzna</strong> towarzyszyła mi od najmłodszych
            lat - uwielbiałam oglądać czarno-białe fotografie dziadków,
            chłonęłam czasopisma w poszukiwaniu pięknych kadrów. Z czasem hobby
            przerodziło się w zawód, a kompaktowy aparat zamienił się w
            profesjonalne <strong>pełnoklatkowe lusterkowce Nikona,</strong> w
            których jestem zakochana bez pamięci.
          </p>{" "}
          <p>
            Jednak to nie pasja do fotografii sprawiła, że zajęłam się{" "}
            <strong>fotografią ślubną</strong> zawodowo, sprawiła to pasja do
            ludzi. Uwielbiam <strong>Wasze historie</strong> - te małe i duże.
            Uwielbiam patrzeć na to jak się kochacie, dowiadywać się co sprawia,
            że się uśmiechacie, a co, że się wzruszacie.{" "}
          </p>
          {isSmall ? (
            <section>
              {" "}
              <h2>Zapraszam przed obiektyw.</h2>
              <h3>Pokażcie mi swój wyjątkowy świat.</h3>
            </section>
          ) : null}
        </div>
        <aside>
          <img src={profile} alt="Ewelina Sadowska" />
        </aside>
        {isSmall ? null : (
          <div className="added_about">
            <h2>Zapraszam przed obiektyw.</h2>
            <h3>Pokażcie mi swój wyjątkowy świat.</h3>
          </div>
        )}
      </div>
      <ButtonInTouch />
    </>
  );
};
export default About;

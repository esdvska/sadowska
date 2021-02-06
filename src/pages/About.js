import React from "react";
import "../styles/About.css";

import profile from "../images/profile2.jpg";
const About = () => {
  return (
    <div className="about">
      <div>
        <h1>FOTOGRAF PEŁEN POMYSŁÓW</h1>
        <p>
          Dziękuje, że tu jesteście, mam na imię Ewelina i jestem fotografem
          ślubnym. Na co dzień mieszkam w Białymstoku, ale mogę być z Wami tam
          gdzie tylko sobie wymarzyliście ślub. Zawsze uśmiechnięta, otwarta na
          Wasze propozycje - nawet te najbardziej szalone. Pełna pozytywnej
          energii, którą się chętnie z Wami podzielę.{" "}
        </p>
        <p>
          Pasja fotograficzna towarzyszyła mi od najmłodszych lat - uwielbiałam
          oglądać czarno-białe fotografie dziadków, chłonęłam czasopisma w
          poszukiwaniu pięknych kadrów. Z czasem hobby przerodziło się w zawód,
          a kompaktowy aparat zamienił się w profesjonalne pełnoklatkowe
          lusterkowce Nikona, w których jestem zakochana bez pamięci.
        </p>{" "}
        <p>
          Jednak to nie pasja do fotografii sprawiła, że zajęłam się fotografią
          ślubną zawodowo, sprawiła to pasja do ludzi. Uwielbiam Wasze historie
          - te małe i duże. Uwielbiam patrzeć na to jak się kochacie, dowiadywać
          się co sprawia, że się uśmiechacie, a co, że się wzruszacie.{" "}
        </p>
        <h2>Zapraszam przed obiektyw.</h2>
        <h3>Pokażcie mi swój wyjątkowy świat.</h3>
      </div>
      <aside>
        <img src={profile} alt="Ewelina Sadowska" />
      </aside>
    </div>
  );
};
export default About;

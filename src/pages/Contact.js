import React from "react";

import { useMediaQuery } from "react-responsive";

import Adresses from "../components/Adresses";
import Firm from "../components/Firm";
import AddedInfo from "../components/AddedInfo";

import "../styles/Contact.css";

import contact from "../images/fotograf_bialystok.jpg";

const Contact = () => {
  const isChanged = useMediaQuery({ query: "(max-width:850px" });

  return (
    <div className="contact">
      <aside>
        <img src={contact} alt="Fotograf Ślubny Białystok" />
      </aside>

      <div className="info_contact">
        <h1>POZNAJMY SIĘ</h1>
        <p>
          Jeśli macie jakieś pytania lub sugestie śmiało piszcie, chętnie umówię
          się z Wami na spotkanie i udzielę wszystkich informacji przy kawie.{" "}
          <br></br>
          <strong>Do usłyszenia!</strong>
        </p>
        {isChanged ? null : <Firm />}
        {isChanged ? null : <Adresses />}
      </div>
      {isChanged ? <AddedInfo /> : null}
    </div>
  );
};
export default Contact;

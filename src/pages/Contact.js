import React, { useState } from "react";

import { useMediaQuery } from "react-responsive";

import Adresses from "../components/Adresses";
import Firm from "../components/Firm";
import AddedInfo from "../components/AddedInfo";

import "../styles/Contact.css";

import contact from "../images/contact.jpg";

const Contact = () => {
  const isChanged = useMediaQuery({ query: "(max-width:850px" });

  return (
    <div className="contact">
      <aside>
        <img src={contact} alt="Fotograf Ślubny" />
      </aside>

      <div className="info_contact">
        <h1>POZNAJMY SIĘ</h1>
        <p>
          Jeśli macie jakieś pytania/sugestie śmiało piszcie/dzwońcie, chętnie
          umówię się z Wami na spotkanie i udzielę wszystkich informacji na
          spotkaniu przy kawie. <br></br>
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

import React from "react";

import { TiSocialFacebook } from "react-icons/ti";
import { TiDevicePhone } from "react-icons/ti";
import { TiMail } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

import "../styles/Contact.css";

import contact from "../images/contact.jpg";

const Contact = () => {
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
        <div className="firm">
          <p>ES FOTOGRAFIE Ewelina Sadowska</p>
          <p>Kaczorowskiego 7/313</p>
          <p>15-375 Białystok</p>
          <p>NIP 5461374623</p>
        </div>
        <div className="adresses">
          <p>
            <TiDevicePhone className="contact_icon" />
            tel.510930418
          </p>
          <p>
            <TiMail className="contact_icon" />
            sadowskafotografie@gmail.com
          </p>
          <p>
            <TiSocialFacebook className="contact_icon" />
            fb.me/sadowskafotografie
          </p>{" "}
          <p>
            <TiSocialInstagram className="contact_icon" />
            instagram.com/sadowskafotografie/
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;

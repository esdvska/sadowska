import React from "react";

import { TiSocialFacebook } from "react-icons/ti";
import { TiDevicePhone } from "react-icons/ti";
import { TiMail } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

const Adresses = () => {
  return (
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
  );
};
export default Adresses;

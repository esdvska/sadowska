import React from "react";
import { NavLink } from "react-router-dom";

import { TiSocialFacebook } from "react-icons/ti";
import { TiDevicePhone } from "react-icons/ti";
import { TiMail } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="wrapper_footer">
      <div className="icons_footer">
        <a href="https://www.facebook.com/sadowskafotografie" target="_blank">
          {" "}
          <TiSocialFacebook />
        </a>
        <a href="https://www.instagram.com/sadowskafotografie/" target="_blank">
          {" "}
          <TiSocialInstagram />
        </a>
        <NavLink to="./kontakt_sadowska_fotografie">
          {" "}
          <TiDevicePhone />
        </NavLink>
        <NavLink to="./kontakt_sadowska_fotografie">
          {" "}
          <TiMail />
        </NavLink>
      </div>
      <div className="footer">
        <p>Sadowska Fotografie © 2021</p>
        <p>Designed by Ewelina Sadowska</p>
      </div>
    </div>
  );
};

export default Footer;

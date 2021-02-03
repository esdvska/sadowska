import React from "react";

import logo from "../images/LOGO.png";

import { NavLink } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <div className="main_nav">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/oferta">Oferta</NavLink>
            </li>
            <li>
              <NavLink to="/omnie">O mnie</NavLink>
            </li>
            <li>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

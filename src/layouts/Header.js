import React from "react";
import { NavLink } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import NavDesktop from "../components/NavDesktop";
import NavButton from "../components/NavButton";

import logo from "../images/LOGO.png";

import "../styles/Header.css";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width:820px" });
  const navigation = isMobile ? <NavButton /> : <NavDesktop />;
  return (
    <div className="header">
      <NavLink to="/" exact>
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      {navigation}
    </div>
  );
};

export default Header;

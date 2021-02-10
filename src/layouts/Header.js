import React from "react";

import { useMediaQuery } from "react-responsive";

import NavDesktop from "../components/NavDesktop";
import NavButton from "../components/NavButton";

import logo from "../images/LOGO.png";

import "../styles/Header.css";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width:640px" });
  const navigation = isMobile ? <NavButton /> : <NavDesktop />;
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      {navigation}
    </div>
  );
};

export default Header;

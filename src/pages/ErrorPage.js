import React from "react";
import { NavLink } from "react-router-dom";

import ButtonInTouch from "../components/ButtonInTouch";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error_page">
      <div className="error_box">
        <div className="error_lines"></div> <h1>404</h1>
        <h2>Ups! Coś poszło nie tak.</h2>
        <h3>
          Strona nie znaleziona, kontynuuj na{" "}
          <NavLink to="/" exact>
            stronie głównej.
          </NavLink>{" "}
        </h3>
        <ButtonInTouch />
      </div>
    </div>
  );
};

export default ErrorPage;

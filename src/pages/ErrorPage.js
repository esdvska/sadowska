import React from "react";
import ButtonInTouch from "../components/ButtonInTouch";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error_page">
      <div className="error_box">
        <div className="error_lines"></div> <h1>404</h1>
        <h2>Strona, którą chcesz odwiedzić nie istnieje.</h2>
        <h3>Prawdopodobnie została przeniesiona lub źle wpisałeś URL.</h3>
        <ButtonInTouch />
      </div>
    </div>
  );
};

export default ErrorPage;

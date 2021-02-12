import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/ButtonInTouch.css";

const ButtonInTouch = () => {
  return (
    <div className="intouch">
      <NavLink to="/kontakt/">
        <button>get in touch</button>
      </NavLink>
    </div>
  );
};
export default ButtonInTouch;

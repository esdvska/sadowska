import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/ButtonInTouch.css";

const ButtonInTouch = () => {
  return (
    <div className="intouch">
      <NavLink to="/kontakt_sadowska_fotografie">
        <button>napisz do mnie</button>
      </NavLink>
    </div>
  );
};
export default ButtonInTouch;

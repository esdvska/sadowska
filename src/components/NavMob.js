import React from "react";

import { NavLink } from "react-router-dom";

import "../styles/NavMob.css";

const NavMob = () => {
  return (
    <div className="nav_mob">
      <div>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/omnie">O mnie</NavLink>
      </div>
      <div>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </div>
      <div>
        <NavLink to="/oferta">Oferta</NavLink>
      </div>
      <div>
        <NavLink to="/kontakt">Kontakt</NavLink>
      </div>
    </div>
  );
};
export default NavMob;

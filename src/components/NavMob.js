import React from "react";

import { NavLink } from "react-router-dom";

import "../styles/NavMob.css";

const NavMob = ({ click }) => {
  return (
    <div className="nav_mob">
      <NavLink to="/" exact onClick={click}>
        <div>Home</div>
      </NavLink>

      <NavLink to="/oferta_fotograf_bialystok" onClick={click}>
        <div> Oferta</div>
      </NavLink>

      <NavLink to="/fotografia_slubna" onClick={click}>
        <div> Portfolio </div>
      </NavLink>

      <NavLink to="/omnie_ewelina_sadowska" onClick={click}>
        <div>O mnie </div>
      </NavLink>

      <NavLink to="/kontakt_sadowska_fotografie" onClick={click}>
        <div> Kontakt </div>
      </NavLink>
    </div>
  );
};
export default NavMob;

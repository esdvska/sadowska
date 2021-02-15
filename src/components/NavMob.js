import React from "react";

import { NavLink } from "react-router-dom";

import "../styles/NavMob.css";

const NavMob = ({ click }) => {
  return (
    <div className="nav_mob">
      <div>
        <NavLink to="/" exact onClick={click}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/oferta_fotograf_bialystok" onClick={click}>
          Oferta
        </NavLink>
      </div>
      <div>
        <NavLink to="/fotografia_slubna" onClick={click}>
          Portfolio
        </NavLink>
      </div>
      <div>
        <NavLink to="/omnie_ewelina_sadowska" onClick={click}>
          O mnie
        </NavLink>
      </div>
      <div>
        <NavLink to="/kontakt_sadowska_fotografie" onClick={click}>
          Kontakt
        </NavLink>
      </div>
    </div>
  );
};
export default NavMob;

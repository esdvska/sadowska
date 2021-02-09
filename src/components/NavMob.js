import React from "react";

import { NavLink } from "react-router-dom";

import "../styles/NavMob.css";

const NavMob = () => {
  return (
    <div className="nav_mob">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/omnie">O mnie</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/oferta">Oferta</NavLink>
          </li>
          <li>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavMob;

import React from "react";
import { NavLink } from "react-router-dom";

const NavDesktop = () => {
  return (
    <div className="main_nav">
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

export default NavDesktop;

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
            <NavLink to="/oferta_fotograf_bialystok">Oferta</NavLink>
          </li>

          <li>
            <NavLink to="/fotografia_slubna">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/omnie_ewelina_sadowska">O mnie</NavLink>
          </li>
          <li>
            <NavLink to="/kontakt_sadowska_fotografie">Kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavDesktop;

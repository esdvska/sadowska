import React, { useState } from "react";

import NavMob from "./NavMob";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

const NavButton = () => {
  const [navVis, setNavVis] = useState(false);
  const handleMobileNavigation = () => {
    setNavVis((prev) => !prev);
  };
  const resetNavVis = () => {
    if (navVis === true) {
      setNavVis(false);
    }
  };
  const checkScroll = () => {
    if (navVis === true && window.pageYOffset > 100) {
      setNavVis(false);
    }
  };
  window.addEventListener("scroll", checkScroll);

  const navButton = navVis ? (
    <>
      <div className="mobile">
        <VscClose onClick={handleMobileNavigation} />
      </div>

      <NavMob click={resetNavVis} />
    </>
  ) : (
    <div className="mobile">
      <VscMenu onClick={handleMobileNavigation} />
    </div>
  );
  return <div>{navButton}</div>;
};
export default NavButton;

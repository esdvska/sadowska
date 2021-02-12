import React, { useEffect, useState } from "react";

import NavMob from "./NavMob";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

const NavButton = () => {
  const [navVisible, setNavVisible] = useState(false);
  const handleMobileNavigation = () => {
    setNavVisible((prev) => !prev);
  };
  const resetNavVisible = () => {
    if (navVisible === true) {
      setNavVisible(false);
    }
  };
  const checkScroll = () => {
    if (navVisible === true && window.pageYOffset > 100) {
      setNavVisible(false);
    }
  };
  window.addEventListener("scroll", checkScroll);
  useEffect(() => {
    window.addEventListener("click", resetNavVisible);
    return () => {
      window.removeEventListener("click", resetNavVisible);
    };
  }, [[]]);

  const navButton = navVisible ? (
    <>
      <div className="mobile">
        <VscClose onClick={handleMobileNavigation} />
      </div>
      <NavMob reset={resetNavVisible} />
    </>
  ) : (
    <div className="mobile">
      <VscMenu onClick={handleMobileNavigation} />
    </div>
  );
  return <div>{navButton}</div>;
};
export default NavButton;

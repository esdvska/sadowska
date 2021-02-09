import React, { useState } from "react";

import NavMob from "./NavMob";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

const NavButton = () => {
  const [navVisible, setNavVisible] = useState(false);
  const handleMobileNavigation = () => {
    setNavVisible((prev) => !prev);
  };

  const navButton = navVisible ? (
    <>
      <VscClose onClick={handleMobileNavigation} />
      <NavMob />
    </>
  ) : (
    <VscMenu onClick={handleMobileNavigation} />
  );
  return <div className="mobile">{navButton}</div>;
};
export default NavButton;

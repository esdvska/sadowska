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
      <div className="mobile">
        <VscClose onClick={handleMobileNavigation} />
      </div>
      <NavMob />
    </>
  ) : (
    <div className="mobile">
      <VscMenu onClick={handleMobileNavigation} />
    </div>
  );
  return <div>{navButton}</div>;
};
export default NavButton;

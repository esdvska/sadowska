import React, { useState } from "react";
import { CgChevronDoubleUp } from "react-icons/cg";
import "../styles/App.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <CgChevronDoubleUp
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 80, display: showScroll ? "flex" : "none" }}
    />
  );
};

export default ScrollArrow;

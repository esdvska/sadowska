import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import ScrollArrow from "./components/ScrollArrow";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <header>{<Header />}</header>
        <main>{<Main />}</main>
        <footer>{<Footer />}</footer>
        <ScrollArrow />
      </div>
    </Router>
  );
};

export default App;

import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import ScrollArrow from "./components/ScrollArrow";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <header>{<Header />}</header>
        <main>{<Main />}</main>
        <footer>{<Footer />}</footer>
        <ScrollArrow />
      </Router>
    </div>
  );
};

export default App;

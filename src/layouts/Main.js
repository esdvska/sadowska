import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Offer from "../pages/Offer";
import Portfolio from "../pages/Portfolio";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/oferta" component={Offer}></Route>
        <Route path="/omnie" component={About}></Route>
        <Route path="/kontakt" component={Contact}></Route>
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Main;

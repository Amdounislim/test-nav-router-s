import React, { useState } from "react";
import "./App.css";
import Home from "./Client/Pages/Home";
import About from "./Client/Pages/About";
import Nav from "./Component/NavBar/Nav";
import { Route, Switch } from "react-router-dom";
import Contact from "./Client/Pages/Contact";
import Partners from "./Client/Pages/Partners";
import FAQ from "./Client/Pages/FAQ";
import Agents from "./Client/Pages/Agents";
import Offers from "./Client/Pages/Offers";

function App() {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/offers" component={Offers} />
        <Route path="/agents" component={Agents} />
        <Route path="/partners" component={Partners} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;

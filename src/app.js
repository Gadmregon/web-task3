import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { NavBar} from "./components";
import { Home, Profile} from "./views";

import "./app.css";

const App = () => {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;

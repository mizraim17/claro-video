import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Film from "./Components/Film/Film";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/film" component={Film} />
  </Switch>
);

export default Router;

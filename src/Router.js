import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Film from "./Components/Film/Film";

const Router = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="claro-video/film" component={Film} />
  </Switch>
);

export default Router;

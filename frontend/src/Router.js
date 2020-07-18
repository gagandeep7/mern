import React from "react";
import {
  BrowserRouter as Routers,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import Error from "./Error";
import Home from "./Home";
import Add from "./Add";
const Router = () => {
  return (
    <>
      <Routers>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/show" component={App} />
          <Route component={Error} />
        </Switch>
      </Routers>
    </>
  );
};

export default Router;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../views/Login";
import Home from "../../views/Home";

const RouterURL = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
};

export default RouterURL;

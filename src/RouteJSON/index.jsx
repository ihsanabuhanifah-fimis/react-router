import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./layout";

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Layout} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  );
};

export default Index;

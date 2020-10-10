import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import GoBack from "../HOC/goBack";
const Corona = () => {
  let Match = useRouteMatch();

  return (
    <React.Fragment>
      <h3>Belajar Nested Route</h3>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        to={`${Match.url}/positif`}
      >
        Data positif
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        to={`${Match.url}/sembuh`}
      >
        Data Sembuh
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        to={`${Match.url}/meninggal`}
      >
        Data Meninggal
      </NavLink>
      <Switch>
        <Route path={`${Match.url}/positif`}>
          <h2>Data positif</h2>
        </Route>
        <Route path={`${Match.url}/sembuh`}>
          <h2>Data Sembuh</h2>
        </Route>
        <Route path={`${Match.url}/meninggal`}>
          <h2>Data Meninggal</h2>
        </Route>
      </Switch>
      <GoBack />
    </React.Fragment>
  );
};

export default Corona;

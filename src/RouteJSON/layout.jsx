import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import router from "./router";

const Layout = (props) => {
  const Links = router.map((link, key) => {
    return (
      <div>
        <NavLink activeStyle=activeStyle={{
          fontWeight: "bold",
          color: "red"
        }} to={link.layout + link.path}>{link.name}</NavLink>
      </div>
    );
  });
  const Navbar = (
    <Switch>
      {router.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  );

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row bg-primary">JSON Config</div>
        <div className="row">
          <div className="col-3">{Links}</div>
          <div className="col-9">{Navbar}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;

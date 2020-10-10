import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStateValue } from "../React-Context/StateProvider";
const ProtectedRoute = ({ children, ...rest }) => {
  const [auth, setAuth] = React.useState(false);
  const [, dispatch] = useStateValue();
  React.useMemo(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
      dispatch({
        type: "SET_USER",
        user: "ihsanhanifah",
        avatar:
          "https://th.bing.com/th/id/OIP.ddRPCIUn8WZuSlOurdwu2gHaE_?w=268&h=181&c=7&o=5&pid=1.7"
      });
    }
  }, [auth]);

  return (
    <div>
      <Route {...rest}>{auth ? children : <Redirect to="/login" />}</Route>
    </div>
  );
};

export default ProtectedRoute;

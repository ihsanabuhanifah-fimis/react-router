import React from "react";
import { withRouter } from "react-router-dom";
const GoBack = (props) => {
  console.log("goBack", props);
  const RediectHandle = () => {
    props.history.push("/");
  };
  const goBackHandle = () => {
    props.history.goBack();
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={RediectHandle}>Redirect</button>
        <button onClick={goBackHandle}>Back</button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(GoBack);

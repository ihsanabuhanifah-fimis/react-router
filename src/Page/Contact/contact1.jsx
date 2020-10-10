import React from "react";

const Contact1 = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <React.Fragment>
      <div>{counter}</div>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Klim Me
      </button>
    </React.Fragment>
  );
};

export default Contact1;

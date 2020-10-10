import React from "react";

const Contact2 = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <React.Fragment>
      <div>{counter}</div>
      <button
        className="btn btn-outline-primary"
        onDoubleClick={() => setCounter((counter) => counter + 1)}
      >
        Klim Me 2 kali
      </button>
    </React.Fragment>
  );
};

export default Contact2;

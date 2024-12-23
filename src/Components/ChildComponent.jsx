import React from "react";

const ChildComponent = ({ message }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{message}</p>
    </div>
  );
};

export default ChildComponent;
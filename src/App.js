import React, { useState } from "react";
import ChildComponent from "./Components/ChildComponent";

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>React Debug Example</h1>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <ChildComponent message="Hello from Parent" />
    </div>
  );
};

export default App;
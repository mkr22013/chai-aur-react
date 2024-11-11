import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = (value) => {
    if (counter + 1 > 20) setCounter(20);
    else setCounter(counter + value);
    console.log("value added", counter);
  };

  const removeValue = () => {
    if (counter - 1 < 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
    console.log("value removed", counter);
  };

  const addButtonStyle = {
    color: "white",
  };

  const removeButtonStyle = {
    color: "red",
  };

  return (
    <>
      <h1>Counter Project</h1>
      <br />
      <h2>Counter value : {counter}</h2>
      <br />
      <button
        onClick={() => addValue(2)}
        className="mx-8"
        style={addButtonStyle}
      >
        Add Value
      </button>

      <button onClick={removeValue} className="mr-4" style={removeButtonStyle}>
        Remove Value
      </button>
    </>
  );
}

export default App;

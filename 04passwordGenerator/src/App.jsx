import { useState } from "react";
import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <PasswordGenerator />
    </>
  );
}

export default App;

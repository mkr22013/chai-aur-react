import Card from "./components/Card";
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl px-2 inset-x-1">
        Tailwind Test
      </h1>
      {/* <div
        className=" w-full h-screen"
        style={{ backgroundColor: color }}
      ></div> */}
      <br />
      <Card
        username="Maulin Raval"
        imgsrc="../src/assets/FB_IMG_1709121683982.jpg"
      />
      <Card imgsrc="../src/assets/PassportPhoto.jpg" />
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center">
        Test
      </div>
    </>
  );
}

export default App;

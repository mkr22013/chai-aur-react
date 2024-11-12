import { useState, useEffect } from "react";

import "./App.css";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";

function App() {
  //We need themeMode to be in useState as based on that we need to update UI
  const [themeMode, setThemeMode] = useState("light");

  //Now we have 2 methods which is empty but we need to implement it here
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //Now we need to write useEffect so when page loads it just apply the theme at html element of page
  useEffect(() => {
    let htmlElm = document.querySelector("html"); //first find out an element
    htmlElm.classList.remove("light", "dark"); //remove the applied styles before reapplying

    htmlElm.classList.add(themeMode);
  }, [themeMode]); //This useEffect should run again when there will be any change on theme so that it will take into effect on page

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-lg mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

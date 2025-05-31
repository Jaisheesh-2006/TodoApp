import React, { createContext, useState } from "react";
import { use } from "react";
export const ThemeContext = createContext();
import './index.css'
const DarkLight = () => {
  const [theme, setTheme] = useState("dark");
 
  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <DarkandLight />
    </ThemeContext.Provider>
  );
};

export default DarkLight;

export const DarkandLight = () => {
  const { theme, handleToggleTheme } = use(ThemeContext);
  return (
    <div className={`p-4 h-lvh flex flex-col justify-center items-center ${theme==="dark"?"bg-gray-800":"bg-white"} ${theme==="dark"?"text-white":"text-black"}`}>
      <h1 className={`text-3xl my-4`}>Dark Light Mode Website</h1>
      <p>Hello !! My React v19 Fans 👍🏻</p>
      <button onClick={handleToggleTheme} className={`bg-blue-500 hover:bg-blue-600 rounded-md mt-4 p-4`}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode "}
      </button>
    </div>
  );
};

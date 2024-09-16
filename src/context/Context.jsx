import { createContext, useState } from "react";

// Create the context
export const myContext = createContext();

const ContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <myContext.Provider value={{mode , toggleMode}}>
      {children}
    </myContext.Provider>
  );
};

export default ContextProvider;

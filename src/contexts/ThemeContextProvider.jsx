import { createContext, useState } from "react";
import { light, dark } from "../themes";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const theme = { dark, light }[currentTheme];

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

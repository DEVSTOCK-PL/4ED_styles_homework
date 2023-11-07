import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const [login, setLogin] = useState(false);

  const toggleLogin = (newLogin) => {
    setLogin(newLogin);
  };
  console.log("login:", login);
  localStorage.setItem("isDarkTheme:", isDarkTheme);
  localStorage.setItem("login", login);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, login, toggleLogin }}>
      {children}
    </AppContext.Provider>
  );
};

import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  //--------------------------------------------------------
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };
  localStorage.setItem("isDarkTheme:", isDarkTheme);
  //--------------------------------------------------------
  // buliean
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const storedLogin = sessionStorage.getItem("login");
    if (storedLogin) {
      trueLogin();
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("login", login.toString());
  }, [login]);
  const toggleLogin = () => {
    setLogin((prevLogin) => !prevLogin);
  };
  const trueLogin = () => {
    setLogin(true);
  };
  const falseLogin = () => {
    setLogin(false);
  };
  console.log("login:", login);

  //---------------------------------------------------------
  // object
  const [userDataContext, setUserDataContext] = useState(null);
  const storedUserData = JSON.parse(localStorage.getItem("userToLogin"));
  console.log("storedUserData:", storedUserData);
  console.log("userDataContext:", userDataContext);
  const deleteUserDataContext = () => {
    setUserDataContext(null);
  };
  const updateUserDataContext = (user) => {
    setUserDataContext(user);
  };
  useEffect(() => {
    if (storedUserData) {
      updateUserDataContext(storedUserData);
    }
  }, []);
  //---------------------------------------------------------
  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        login,
        toggleLogin,
        trueLogin,
        falseLogin,
        userDataContext,
        updateUserDataContext,
        deleteUserDataContext,
      }}>
      {children}
    </AppContext.Provider>
  );
};

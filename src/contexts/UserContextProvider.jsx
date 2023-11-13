import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const { localStorage } = useLocalStorage("user");

  useEffect(() => {
    const item = localStorage.getItem();
    if (item) {
      setUserData(item);
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  const logOut = () => {
    setIsAuth(false);
    setUserData(null);
    localStorage.removeItem();
  };
  const logIn = (user) => {
    setIsAuth(true);
    setUserData(user);
    localStorage.setItem(user);
  };

  const values = {
    isAuth,
    userData,
    logOut,
    logIn,
  };

  if (isLoading) return <div>loading</div>;

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;

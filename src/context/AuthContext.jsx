import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = (data) => {
    //pobieranie danych z formularz
    //zapytanie async
    setUser(data);
  };

  const logout = () => {
    setUser(null);
    //wyczyszczenie sesji
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

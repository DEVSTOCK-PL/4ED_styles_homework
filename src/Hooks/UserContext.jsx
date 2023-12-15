import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState();

    const login = (data) => {
        console.log("gosc", data);
        setUser(data);
    }
    console.log("Aktualny user: ", user)

    const logout = () => {
        console.log("wylogowano")
        setUser(null);
    }
    console.log("Aktualny user: ", user)

    return (
    <UserContext.Provider value={{user, setUser, login, logout}}>
        {children}
        </UserContext.Provider>
    )
};

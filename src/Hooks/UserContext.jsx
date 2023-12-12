import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    const login = (data) => {

        setUser(data);
    }

    const logout = () => {
        console.log("wylogowano")
        setUser(null);
    }



    return (
    <UserContext.Provider value={{user, setUser, login, logout}}>
        {children}
        </UserContext.Provider>
    )
};

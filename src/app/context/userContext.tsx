"use client";

import React, {createContext, useContext, useState, ReactNode, Children} from "react";

interface UserContextType {
    user: { userName: string} | null;
    rememberMe: boolean;
    login: (userName: string, remember: boolean) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType>({
    user: null,
    rememberMe: false,
    login: () => {},
    logout: () => {},
});

export const UserProvider = ({ children}: { children: ReactNode }) => {
    const [user, setUser] = useState<{ userName: string} | null >(
        () => JSON.parse(localStorage.getItem("user") || "null")
    );
    const [rememberMe, setRememberMe] = useState<boolean>(
        !!localStorage.getItem("user")
    );

    const login = (userName: string, remember: boolean) => {
        const userData = {userName};
        setUser(userData);
        setRememberMe(remember);
        if (remember) {
            localStorage.setItem("user", JSON.stringify(userData));
        } else {
            localStorage.removeItem("user");
        }
    };

    const logout = () => {
        setUser(null);
        setRememberMe(false);
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider value={{user, rememberMe, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
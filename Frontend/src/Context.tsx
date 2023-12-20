import React, { createContext, useContext, useState } from "react"
import { apis } from "./apis";
type AuthContextData = {
    isAuthenticated: boolean;
    user: any;
    login: (name: string, password: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextData | null>(null)
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
interface AuthProviderProps {
    children: React.ReactNode;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (email: string, password: string) => {
        let { status, data, message } = await apis.post("login", { email, password })
        if (status) {
            setUser(data)
            setIsAuthenticated(true);
            alert("Login succes!")
        } else {
            alert(message)
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
    };
    return (<>
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>

    </>)
}
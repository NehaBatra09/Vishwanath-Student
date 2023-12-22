import React, { createContext, useContext, useState } from "react"
import { apis } from "./apis";
import { useNavigate } from "react-router-dom";
type AuthContextData = {
    isAuthenticated: boolean;
    user: any;
    accounts: any;
    transactions: any;
    login: (name: string, password: string) => void;
    logout: () => void;
    getAccounts: (userId: number) => Promise<void>;
    getTransactionsByAccountId: (userId: number, accountId: number) => Promise<void>
    addNewAccount: (payload: any) => Promise<void>;
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
    const [accounts, setAccounts] = useState([])
    const [transactions, setTransactions] = useState([])
    const login = async (email: string, password: string) => {
        let { status, data, message } = await apis.post("login", { email, password })
        if (status) {
            if (!localStorage.getItem("userId")) {
                localStorage.setItem("userId", data.id)
            }
            setUser(data)
            setIsAuthenticated(true);
            alert("Login succes!")
        } else {
            alert(message)
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        localStorage.clear()
        setUser(null)
        setIsAuthenticated(false);
        window.location.href = "/"

    };
    const getAccounts = async (userId: number) => {
        console.log(userId)
        let { status, data, message } = await apis.get("account/" + userId)
        console.log(status, data)
        if (status) {
            setAccounts(data)
        } else {
        }
    }
    const addNewAccount = async (payload: any) => {
        let { status, data, message } = await apis.post("account", payload)
        if (status) {
            setAccounts(data)
        } else {
        }
    }
    const getTransactionsByAccountId = async (userId: number, accountId: number) => {
        setTransactions([])
        let { status, data, message } = await apis.get(`transactions/${userId}/${accountId}`)
        if (status) {
            setTransactions(data)
        } else {
        }
    }


    return (<>
        <AuthContext.Provider value={{ user, isAuthenticated, accounts, transactions, login, logout, getAccounts, getTransactionsByAccountId, addNewAccount }}>
            {children}
        </AuthContext.Provider>

    </>)
}
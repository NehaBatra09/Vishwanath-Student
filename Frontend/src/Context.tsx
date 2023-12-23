import React, { createContext, useContext, useState } from "react"
import { apis } from "./apis";
import { useNavigate } from "react-router-dom";
type transaction = {
    name: string,
    email: string,
    age: string,
    accountType: string
}
type AuthContextData = {
    isAuthenticated: boolean;
    user: any;
    accounts: any;
    transactions: any;
    accountTypes: any;
    newTransationDetails: transaction
    login: (name: string, password: string) => void;
    logout: () => void;
    getAccounts: (userId: number) => Promise<void>;
    getTransactionsByAccountId: (userId: number, accountId: number) => Promise<void>
    addNewAccount: () => Promise<void>;
    getAccountTypes: () => Promise<void>
    setNewTransactionDetails: (details: transaction) => void;
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
    const [accountTypes, setAccountTypes] = useState([])
    const [newTransationDetails, setNewTransactionDetails] = useState<transaction>({ name: "", email: "", age: "", accountType: "" })

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
    const addNewAccount = async () => {
        let userId: string | null = localStorage.getItem("userId")
        console.log(userId)
        let { status, data, message } = await apis.post("account/" + userId, newTransationDetails)
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
    const getAccountTypes = async () => {
        let { status, data, message } = await apis.get("accountTypes")
        if (status) {
            setAccountTypes(data)
        }
    }


    return (<>
        <AuthContext.Provider value={{ user, isAuthenticated, accounts, accountTypes, transactions, newTransationDetails, login, logout, getAccounts, getTransactionsByAccountId, addNewAccount, getAccountTypes, setNewTransactionDetails }}>
            {children}
        </AuthContext.Provider>

    </>)
}
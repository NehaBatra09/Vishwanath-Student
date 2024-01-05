import React, { createContext, useContext, useState } from "react"
import { apis } from "./apis";
type account = {
    acnumber: string,
    name: string,
    email: string,
    age: number,
    accountType: string,
    date: string,
    status: string
}
type AuthContextData = {
    isAuthenticated: boolean;
    user: any;
    accounts: [{ acnumber: string; accountType: string; name: string; email: string; age: number; date: string; status: string; }];
    transactions: any;
    login: (name: string, password: string) => void;
    logout: () => void;
    getAccounts: (userId: number) => Promise<void>;
    getTransactionsByAccountId: (userId: number, accountId: number) => Promise<void>
    addNewAccount: (accountDetails: account) => Promise<void>;
};
const initialAuthContextData: AuthContextData = {
    isAuthenticated: false,
    user: null,
    accounts: [{ acnumber: "", accountType: "", name: "", email: "", age: 0, date: "", status: "" }],
    transactions: null,
    login: (name: string, password: string) => { },
    logout: () => { },
    getAccounts: async (userId: number) => { },
    getTransactionsByAccountId: async (userId: number, accountId: number) => { },
    addNewAccount: async (accountDetails: account) => { },
};
export const AuthContext = createContext<AuthContextData>(initialAuthContextData)

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};
interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accounts, setAccounts] = useState<[{ acnumber: string; accountType: string; name: string; email: string; age: number; date: string; status: string; }]>([{ acnumber: "", accountType: "", name: "", email: "", age: 0, date: "", status: "" }])
    const [transactions, setTransactions] = useState([])

    const login = async (email: string, password: string) => {
        let { status, data } = await apis.post("login", { email, password })
        if (!localStorage.getItem("userId")) {
            localStorage.setItem("userId", data.id)
        }
        setUser(data)
        setIsAuthenticated(status);

    };

    const logout = () => {
        localStorage.clear()
        setUser(null)
        setIsAuthenticated(false);
        window.location.href = "/"

    };
    const getAccounts = async (userId: number) => {
        let { data } = await apis.get("account/" + userId)
        setAccounts(data)

    }
    const addNewAccount = async (accountDetails: account) => {
        let userId: string | null = localStorage.getItem("userId")
        let { data } = await apis.post("account/" + userId, accountDetails)
        setAccounts(data)
        window.location.href = "/accountView"
    }
    const getTransactionsByAccountId = async (userId: number, accountId: number) => {
        setTransactions([])
        let { data } = await apis.get(`transactions/${userId}/${accountId}`)
        setTransactions(data)

    }


    return (<>
        <AuthContext.Provider value={{
            user, isAuthenticated, accounts, transactions, login, logout, getAccounts, getTransactionsByAccountId, addNewAccount
        }}>
            {children}
        </AuthContext.Provider>

    </>)
}
export default AuthProvider
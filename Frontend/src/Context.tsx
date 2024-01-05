import React, { createContext, useContext, useEffect, useState } from "react"
import { apis } from "./apis";
import { useNavigate } from "react-router-dom";
type account = {
    id: string;
    address: string;
    branch: string;
    date: string;
    accountType: string;
    name: string;
    email: string;
    status: string;
    age: string;


}
type AuthContextData = {
    isAuthenticated: boolean;
    user: any;
    accounts: [
        account
    ];
    transactions: any;
    login: (email: string, password: string) => void;
    logout: () => void;
    getAccounts: (userId: string) => Promise<void>;
    getTransactionsByAccountId: (userId: string, accountId: string) => Promise<void>
    addNewAccount: (accountDetails: account) => Promise<void>;
};
const initialAuthContextData: AuthContextData = {
    isAuthenticated: false,
    user: null,
    accounts: [{ id: "", address: "", branch: "", date: "", accountType: "", name: "", email: "", age: "", status: "" }],
    transactions: null,
    login: (name: string, password: string) => { },
    logout: () => { },
    getAccounts: async (userId: string) => { },
    getTransactionsByAccountId: async (userId: string, accountId: string) => { },
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
    const [accounts, setAccounts] = useState<[account]>([{ id: "", accountType: "", name: "", email: "", age: "", date: "", status: "", address: "", branch: "" }])
    const [transactions, setTransactions] = useState([])
    const navigate = useNavigate()

    const login = async (email: string, password: string) => {

        let { status, data } = await apis.post("login", { email, password })
        if (!localStorage.getItem("userId")) {
            localStorage.setItem("userId", data.id)
        }
        if (status) {
            setUser(data)
            alert("Login Success.")
        } else {
            alert("UserName and Password does not match.")
        }
        setIsAuthenticated(status);

    };

    const logout = () => {
        localStorage.clear()
        setUser(null)
        setIsAuthenticated(false);
        navigate("/")
    };
    const getAccounts = async (userId: string) => {
        let { data } = await apis.get("account/" + userId)
        setAccounts(data)

    }
    const addNewAccount = async (accountDetails: account) => {
        const { id, address, branch, date, name, age, email } = accountDetails
        if (id == "" && address == "" && branch == "" && date == "" && name == "" && age == "" && email == "") {
            alert("All Fields are required.")
        } else {
            let userId: string | null = localStorage.getItem("userId")
            let { data, status } = await apis.post("account/" + userId, accountDetails)

        }
    }
    const getTransactionsByAccountId = async (userId: string, accountId: string) => {
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
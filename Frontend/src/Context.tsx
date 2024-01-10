import React, { createContext, useContext, useState } from "react"
import { apis } from "./apis"
type account = {
    id: string
    address: string
    branch: string
    date: string
    accountType: string
    name: string
    email: string
    status: string
    age: string


}
type AuthContextData = {
    isAuthenticated: boolean
    user: any
    accounts: [
        account
    ]
    transactions: any
    logout: () => void
    getAccounts: (userId: string) => Promise<void>
    getTransactionsByAccountId: (userId: string, accountId: string) => Promise<void>
    addNewAccount: (accountDetails: account) => Promise<void>
}
const initialAuthContextData: AuthContextData = {

    isAuthenticated: false,
    user: null,
    accounts: [{ id: "", address: "", branch: "", date: "", accountType: "", name: "", email: "", age: "", status: "" }],
    transactions: null,
    logout: () => { },
    getAccounts: async (userId: string) => { },
    getTransactionsByAccountId: async (userId: string, accountId: string) => { },
    addNewAccount: async (accountDetails: account) => { },

}
export const AuthContext = createContext<AuthContextData>(initialAuthContextData)

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}
interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [accounts, setAccounts] = useState<[account]>([{ id: "", accountType: "", name: "", email: "", age: "", date: "", status: "", address: "", branch: "" }])
    const [transactions, setTransactions] = useState([])

    const logout = () => {
        localStorage.clear()
        setUser(null)
        setIsAuthenticated(false)
    }
    const getAccounts = async (userId: string) => {
        let myaccounts = await apis.get("account/" + userId)
        let accountData: string | null = localStorage.getItem("accountData")

        if (accountData !== null) {
            let newData: [account] = JSON.parse(accountData)
            for (let i = 0; i <= newData.length; i++) {
                if (newData[i] !== undefined) {
                    myaccounts.data.push(newData[i])
                }
            }
        }
        let newArr: [account] = [...myaccounts.data] as [account]
        setAccounts(newArr)
    }

    const addNewAccount = async (accountDetails: account) => {

        let userId: string | null = localStorage.getItem("userId")
        let { data } = await apis.post("account/" + userId, accountDetails)

        if (localStorage.getItem("accountData") === null) {
            localStorage.setItem("accountData", JSON.stringify([data]))
        } else {
            let account = localStorage.getItem("accountData")
            if (account) {
                let newDT = JSON.parse(account)
                newDT.push(data)
                localStorage.removeItem("accountData")
                localStorage.setItem("accountData", JSON.stringify(newDT))
            }
        }
    }
    const getTransactionsByAccountId = async (userId: string, accountId: string) => {
        let { data } = await apis.post(`transactions/${userId}`, { accountId })
        setTransactions(data)
    }


    return (<>
        <AuthContext.Provider
            value={{
                user, isAuthenticated, accounts, transactions, logout, getAccounts, getTransactionsByAccountId, addNewAccount
            }}>
            {children}
        </AuthContext.Provider>

    </>)
}
export default AuthProvider
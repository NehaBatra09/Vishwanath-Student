import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { useAuth } from "../Context";
import Header from "./Header";

const Transactions: React.FC = () => {
    const { transactions, getTransactionsByAccountId } = useAuth();
    const location = useLocation()

    const userId: string | null = localStorage.getItem("userId")
    useEffect(() => {
        if (userId) {
            getData(parseInt(userId))
        }
    }, [])

    const getData = async (id: number) => {
        await getTransactionsByAccountId(id, location?.state?.acnumber)
    }

    return (<>
        <Header />
        <table style={{ marginLeft: "400px" }}>
            <thead>
                <tr>
                    <th>Account Number</th>
                    <th>Total Amount</th>
                    <th>Payment Mode</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction: any) =>
                    <tr>
                        <td>{transaction.acnumber}</td>
                        <td>{transaction.total}</td>
                        <td>{transaction?.credit} {transaction?.debit}</td>
                    </tr>
                )}
            </tbody>
        </table >
    </>)
}

export default Transactions
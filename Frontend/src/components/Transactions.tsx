import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { useAuth } from "../Context";
import Header from "./Header";

const Transactions: React.FC = () => {
    const context = useAuth();
    const location = useLocation()

    const userId: string | null = localStorage.getItem("userId")
    useEffect(() => {
        if (userId && context) {
            context.getTransactionsByAccountId(parseInt(userId), location?.state?.acnumber)
        }
    }, [userId, context])



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
                {context && context.transactions.map((transaction: any) =>
                    <tr key={transaction.acnumber}>
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
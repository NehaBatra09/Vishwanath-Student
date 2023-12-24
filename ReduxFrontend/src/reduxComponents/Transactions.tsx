import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { fetchTransactionsByAccountId } from "../Redux/reducer";

const Transactions: React.FC = () => {
    const { transactions } = useSelector((state: RootState) => state.accountReducer)
    const dispatch = useDispatch<AppDispatch>()
    const location = useLocation()

    const userId: string | null = localStorage.getItem("userId")
    useEffect(() => {
        if (userId) {
            dispatch(fetchTransactionsByAccountId({ userId: parseInt(userId), accountId: location?.state?.acnumber }))
        }
    }, [dispatch])



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
                {transactions?.map((transaction: any) =>
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
import { useEffect } from "react"
import { useAuth } from "../Context";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const AccountView: React.FC = () => {
    const { accounts, getAccounts } = useAuth();
    const userId: string | null = localStorage.getItem("userId")
    const navigate = useNavigate()
    useEffect(() => {
        if (userId) {
            getData(parseInt(userId))
        }
    }, [])

    const getData = async (id: number) => {
        await getAccounts(id)
    }

    return (<>
        <Header />
        <table style={{ marginLeft: "300px" }}>
            <thead>
                <tr>
                    <th>Account Number</th>
                    <th>Account Type</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Account Date</th>
                </tr>
            </thead>
            <tbody>
                {accounts.map((account: any) =>
                    <tr onClick={() => navigate(`/transactions`, { state: { acnumber: account.acnumber } })}>
                        <td>{account.acnumber}</td>
                        <td>{account.accountType}</td>
                        <td>{account.name}</td>
                        <td>{account.email}</td>
                        <td>{account.age}</td>
                        <td>{account.date}</td>

                    </tr>
                )}
            </tbody>
        </table>
    </>)
}

export default AccountView
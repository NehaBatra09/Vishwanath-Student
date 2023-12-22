import { useEffect } from "react"
import { useAuth } from "../Context";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
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
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "30px", justifyContent: "center", alignItems: "center" }}>
            {accounts.map((account: any) =>
                <Card sx={{ minWidth: 275, background: "lightblue" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            AC/No: {account.acnumber}
                        </Typography>
                        <Typography variant="h5" component="div">
                            AC/Type: {account.accountType}
                        </Typography>
                        <Typography variant="body2">
                            Name: {account.Name}

                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Email: {account.email}
                        </Typography>
                        <Typography variant="body2">
                            Age:  {account.age}

                        </Typography>

                        <Typography variant="body2">
                            Date:  {account.date}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => navigate(`/transactions`, { state: { acnumber: account.acnumber } })}>Go To Details</Button>
                    </CardActions>
                </Card>
            )}
        </div>
        {/* <table style={{ marginLeft: "300px" }}>
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
               
                    <tr >
                        <td></td>
                        <td>{account.accountType}</td>
                        <td>{account.name}</td>
                        <td>{account.email}</td>
                        <td>{account.age}</td>
                        <td>{account.date}</td>

                    </tr>
                )}
            </tbody>
        </table> */}
    </>)
}

export default AccountView
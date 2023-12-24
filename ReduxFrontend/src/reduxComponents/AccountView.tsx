import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { fetchAccountByUserId } from "../Redux/reducer";
const AccountView: React.FC = () => {

    const { accounts } = useSelector((state: RootState) => state.accountReducer)
    const dispatch = useDispatch<AppDispatch>()
    const userId: string | null = localStorage.getItem("userId")
    const navigate = useNavigate()
    useEffect(() => {
        if (userId) {
            dispatch(fetchAccountByUserId(parseInt("1")))
        }
    }, [dispatch])

    return (<>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "20px" }}>

            <Button type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2, padding: "20px" }} onClick={() => navigate("/accountForm")}>Create Account</Button>
            <Header />
        </div>


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
                        <Typography variant="h5" component="div">
                            AC/Stauts: {account.status}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => navigate(`/transactions`, { state: { acnumber: account.acnumber } })}>Go To Details</Button>
                    </CardActions>
                </Card>
            )}
        </div>

    </>)
}

export default AccountView
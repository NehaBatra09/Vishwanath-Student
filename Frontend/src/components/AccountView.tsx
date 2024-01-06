import React, { useEffect } from "react"
import { useAuth } from "../Context";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
const AccountView: React.FC = () => {
    const context = useAuth();
    const userId: string | null = localStorage.getItem("userId")
    const navigate = useNavigate()
    useEffect(() => {
        if (userId && context) {
            context.getAccounts(userId)
        }
    }, [context])

    return (<>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "20px" }}>

            <Button type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2, padding: "20px" }} onClick={() => navigate("/accountForm")}>Create Account</Button>
            <Header />
        </div>


        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "30px", justifyContent: "center", alignItems: "center" }}>
            {context && context?.accounts?.map((account: any, index: number) =>
                <Card key={index} sx={{ minWidth: 275, background: "lightblue" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            AC/No: {account?.id}
                        </Typography>
                        <Typography variant="h5" component="div">
                            AC/Type: {account?.accountType}
                        </Typography>
                        <Typography variant="body2">
                            Name: {account?.name}

                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Email: {account?.email}
                        </Typography>
                        <Typography variant="body2">
                            Age:  {account?.age}

                        </Typography>

                        <Typography variant="body2">
                            Date:  {new Date(account?.date).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Addrss: {account?.address}
                        </Typography>
                        <Typography variant="body2">
                            Branch: {account?.branch}
                        </Typography>
                        <Typography variant="h5" component="div">
                            AC/Stauts: {account?.status}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button disabled={!account?.isTransactions} size="small" onClick={() =>
                            navigate(`/transactions`, {
                                state: { acnumber: account?.id }
                            })}>Go To Details</Button>
                    </CardActions>
                </Card>
            )}
        </div >

    </>)
}

export default AccountView
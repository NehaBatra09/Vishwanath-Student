import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { useAuth } from "../Context"
import Header from "./Header"
import { Card, CardContent, Typography } from "@mui/material"

const Transactions: React.FC = () => {
    const context = useAuth();
    const location = useLocation()

    const userId: string | null = localStorage.getItem("userId")
    const acnumber: string = location?.state?.acnumber + ""
    useEffect(() => {
        if (userId && context) {
            context.getTransactionsByAccountId(userId, acnumber)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (<>
        <Header />
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "30px", justifyContent: "center", alignItems: "center" }}>
            {context && context?.transactions?.map((transaction: any, index: number) =>
                <Card key={index} sx={{ minWidth: 275, background: "lightblue" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Transaction Id: {transaction?.tid}
                        </Typography>
                        <Typography variant="h5" component="div">
                            Total Amount: {transaction?.total}
                        </Typography>
                        <Typography variant="body2">
                            Payment Mode: {transaction?.credit} {transaction?.debit}

                        </Typography>

                    </CardContent>
                </Card>
            )}
        </div>
    </>)
}

export default Transactions
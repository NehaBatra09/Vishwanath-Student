import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { useAuth } from "../Context"
import Header from "./Header"
import { DataGrid, GridColDef } from '@mui/x-data-grid'
type transType = {
    id: string;
    total: number,
    credit: number
}


const Transactions: React.FC = () => {
    const columns: GridColDef[] = [
        { field: 'tid', headerName: 'Transation Id', width: 150 },
        { field: 'total', headerName: 'Amount', width: 150 },
        { field: 'credit', headerName: 'Payment', width: 150 },
    ];
    const context = useAuth();
    const location = useLocation()
    const [rows, setRows] = useState([])
    const userId: string | null = localStorage.getItem("userId")
    const acnumber: string = location?.state?.acnumber + ""
    useEffect(() => {
        if (userId && context) {
            context.getTransactionsByAccountId(userId, acnumber)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])

    useEffect(() => {
        if (context.transactions.length > 0) {
            let newRows = context.transactions.map((row: transType, index: number) => ({ ...row, id: index + 1 }))
            setRows(newRows)
        }
    }, [context.transactions])


    return (<>
        <Header />
        {console.log(context?.transactions)}
        <div style={{ marginLeft: "300px", height: 300, width: '50%', backgroundColor: "lightblue", fontWeight: "bolder" }}>
            {<DataGrid rows={rows} columns={columns} />}
        </div>
    </>)
}

export default Transactions
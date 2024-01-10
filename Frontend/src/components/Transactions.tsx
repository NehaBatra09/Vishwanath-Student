import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { useAuth } from "../Context"
import Header from "./Header"
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
    { field: 'tid', headerName: 'Transation Id', width: 150 },
    { field: 'total', headerName: 'Amount', width: 150 },
    { field: 'credit', headerName: 'Payment', width: 150 },
];
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
        <div style={{ marginLeft: "300px", height: 300, width: '50%', backgroundColor: "lightblue", fontWeight: "bolder" }}>
            {context && <DataGrid rows={context?.transactions} columns={columns} />}
        </div>
    </>)
}

export default Transactions
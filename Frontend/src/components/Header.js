import { Button } from "@mui/material"
import { useAuth } from "../Context"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const context = useAuth();
    const navigate = useNavigate()

    return (<>
        <div className="header">
            {localStorage.getItem("email")}
            <Button type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2, padding: "20px" }} onClick={() => {
                    context.logout()
                    navigate("/")
                }}>Log Out</Button>
        </div>
    </>)

}
export default Header
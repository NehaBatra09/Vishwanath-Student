import { Button } from "@mui/material";
import { useAuth } from "../Context";

const Header = ({ }) => {
    const { logout } = useAuth();
    return (<>
        <Button type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, padding: "20px" }} onClick={logout}>Log Out</Button>
    </>)
}
export default Header
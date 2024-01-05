import { Button } from "@mui/material";
import { useAuth } from "../Context";

const Header = ({ }) => {
    const context = useAuth();
    return (<>
        <Button type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, padding: "20px" }} onClick={() => context.logout()}>Log Out</Button>
    </>)
}
export default Header
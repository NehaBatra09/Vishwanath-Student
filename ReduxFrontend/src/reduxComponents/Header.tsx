import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logOut } from "../Redux/reducer";
import { AppDispatch, RootState } from '../Redux/store';
import { useNavigate } from "react-router-dom";
const Header = ({ }) => {
    let navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    return (<>
        <Button type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, padding: "20px" }} onClick={() => {
                dispatch(logOut())
                navigate("/")

            }}>Log Out</Button>
    </>)
}
export default Header
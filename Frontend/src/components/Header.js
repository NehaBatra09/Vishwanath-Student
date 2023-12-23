import { useAuth } from "../Context";

const Header = ({ }) => {
    const { logout, createTransaction } = useAuth();
    return (<>
        <button onClick={logout}>Logout</button>
        <button onClick={createTransaction}></button>
    </>)
}
export default Header
import Login from "../reduxComponents/Login"

const MainRoute: React.FC<any> = ({ children }) => {
    const userId: string | null = localStorage.getItem("userId")
    if (userId == undefined) {
        return <Login />
    } else {
        return (<>{children}</>)
    }
}
export default MainRoute
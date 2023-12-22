import { Children, useEffect } from "react"
import { useAuth } from "../Context"
import Login from "../Login"
import { useNavigate } from "react-router-dom"
interface Compo {
    children: React.ReactNode
}

const MainRoute: React.FC<any> = ({ children }) => {
    const userId: string | null = localStorage.getItem("userId")
    console.log(userId)
    if (userId == undefined) {
        return <Login />
    } else {
        return (<>{children}</>)
    }
}
export default MainRoute
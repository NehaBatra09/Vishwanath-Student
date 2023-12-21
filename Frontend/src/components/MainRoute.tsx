import { Children, useEffect } from "react"
import { useAuth } from "../Context"
import Login from "../Login"
import { useNavigate } from "react-router-dom"
interface Compo {
    children: React.ReactNode
}

const MainRoute: React.FC<any> = ({ children }) => {
    const navigate = useNavigate()
    const { isAuthenticated } = useAuth()
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/")
        }
    }, [])
    return (<>{isAuthenticated && children}</>)
}
export default MainRoute
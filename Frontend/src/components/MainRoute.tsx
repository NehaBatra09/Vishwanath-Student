import AuthProvider from "../Context"
import Login from "../Login"
interface Compo {
    children: React.ReactNode
}

const MainRoute: React.FC<Compo> = ({ children }) => {
    const userId: string | null = localStorage.getItem("userId")
    if (userId == undefined) {
        return <Login />
    } else {
        return (<>
            <AuthProvider>
                {children}
            </AuthProvider >
        </>)
    }
}

export default MainRoute
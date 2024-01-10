import Login from "../Login"

interface Compo {
    children: React.ReactNode
}

const MainRoute: React.FC<Compo> = ({ children }) => {

    const userId: string | null = localStorage.getItem("userId")
    return <>{!userId ? <Login /> : <>{children}</>}</>

}

export default MainRoute
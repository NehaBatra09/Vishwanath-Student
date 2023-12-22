import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "./store"
import { useEffect } from "react"
import { fetchUserById } from "./reducer"
const Counter: React.FC = () => {
    const { count } = useSelector((state: RootState) => state.counterReducer)
    console.log(count)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchUserById(1))
    }, [dispatch])
    return (<></>)
}

export default Counter
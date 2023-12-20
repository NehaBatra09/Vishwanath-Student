import { createContext, useState } from "react";

export type Counter = {
    count: any,
    increment: () => void,
    decrement: () => void

}
export const CounterContex = createContext<Counter | null>(null)
interface Auth {
    children: React.ReactNode
}
const CounterProvider: React.FC<Auth> = ({ children }) => {
    const [count, setCount] = useState<number>(1)
    const increment = () => {
        setCount(pre => pre + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (<>
        <CounterContex.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContex.Provider>
    </>)
}
export default CounterProvider
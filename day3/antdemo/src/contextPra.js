
import { createContext, useContext } from "react";
const MyContext = createContext('light')
export default function ContextPra() {
    return (
        <MyContext.Provider value={'light'}>
            <Pra1 />
        </MyContext.Provider>
    )
}
function Pra1() {

    return (
        <div>
            <Pra2 />
        </div>)
}
function Pra2() {
    const context = useContext(MyContext)
    return (
        <div>
            {context}
        </div>
    )
}
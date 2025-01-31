import { useContext } from "react"
import { Authcontext } from "./AuthContextProvider"

const UseAuth=()=>{
   const context=useContext(Authcontext)
    return context
}

export default UseAuth
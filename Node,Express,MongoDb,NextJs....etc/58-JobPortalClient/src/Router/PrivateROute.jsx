import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext/AuthContextProvider";

import { Navigate, useLocation } from "react-router-dom";


const PrivateROute = ({ children }) => {

    const { user, loading } = useContext(Authcontext)
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <div className="skeleton h-32 w-32"></div>

    }

    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={location.pathname} ></Navigate>



};

export default PrivateROute;
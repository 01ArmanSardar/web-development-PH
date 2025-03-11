import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    console.log(user);
    if (loading) {
        return <span className="loading loading-spinner text-success"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>

};

export default PrivateRoutes;
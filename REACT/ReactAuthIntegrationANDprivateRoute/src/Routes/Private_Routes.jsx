import React, { useContext } from 'react';
import { AuthContext } from '../Componentts/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private_Routes = ({children}) => {

    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner text-success"></span>
    }
    if (user){
        return children
    }
    return <Navigate to={'/Login'}></Navigate>
};

export default Private_Routes;
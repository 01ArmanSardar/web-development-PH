import React, { useContext } from 'react';
import { AuthContext } from '../Componentts/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private_Routes = ({children}) => {

    const {user}=useContext(AuthContext)
    if (user){
        return children
    }
    return <Navigate to={'/Login'}></Navigate>
};

export default Private_Routes;
import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";

import auth from "../Firebase/Firebase.init";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const CreateUSer = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const SigninUSer =(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const authinfo = {user, CreateUSer,SigninUSer}
    return (
        <AuthContext.Provider value={authinfo}>

            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}


export default AuthProvider;
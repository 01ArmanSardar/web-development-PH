import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,} from "firebase/auth";

import auth from "../Firebase/Firebase.init";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const CreateUSer = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const SigninUSer = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut=()=>{
      return signOut(auth)
    }

    useEffect(() => {
      const unSubscribe=  onAuthStateChanged(auth, currentUser => {
            // if (currentUser) {
            //     console.log('ovserving current user in useEffect from AuthProvider', currentUser);
            //     setUser(currentUser)
                
            // }
             
                console.log('ovserving current user in useEffect from AuthProvider', currentUser);
                setUser(currentUser)
                
            
        });
    return ()=>{
        unSubscribe()
    }
    }, [])
    const authinfo = { user, CreateUSer, SigninUSer,LogOut }
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
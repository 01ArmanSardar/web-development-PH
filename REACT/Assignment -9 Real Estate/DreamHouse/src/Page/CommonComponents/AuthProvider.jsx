import { createContext, useEffect, useState } from "react";
import auth from '../../FireBase/FireBase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null)
    
    
    const CreateAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        
        
    }

    const Logout=()=>{
        return signOut(auth) 

    }

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentuSer) => {
            console.log('i am in onAUthstateChanged and ovserving currenuser',currentuSer);
            SetUser(currentuSer)

        })
        return () => { Unsubscribe() }

    }, [])

    const authInfo = {
        user,
        CreateAccount,
        Login,
        Logout,
        auth,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, Setuser] = useState(null)

    const CreatAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (curentUser) => {
            if (curentUser)

                console.log('i am in onAUthstateChanged and ovserving currenuser', curentUser);
            Setuser(curentUser)

        })
        return () => { Unsubscribe() }

    }, [])

    const authInfo = { CreatAccount, login, user, LogOut }
    return (

        <div>
            <AuthContext.Provider value={authInfo}>

                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
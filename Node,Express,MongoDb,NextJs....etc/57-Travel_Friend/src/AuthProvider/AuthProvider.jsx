import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, SetuSer] = useState(null)

    const [loading, setloading] = useState(true)
    const CreateUSer = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const UserLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = () => {
        setloading(true)
        return signOut(auth)

    }

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentuSer) => {
            console.log('i am in onAUthstateChanged and ovserving currenuser', currentuSer);
            SetuSer(currentuSer)
            setloading(false)

        })
        return () => { Unsubscribe() }

    }, [])


    const authinfo = { user, SetuSer, loading, CreateUSer, UserLogin, Logout }
    return (
        <AuthContext.Provider value={authinfo}>

            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
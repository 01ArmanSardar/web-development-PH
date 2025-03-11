import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../FireBase/firebase.config";


const auth = getAuth(app)

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null)
    const [loading, SetLoading] = useState(true)

    const createUser = (email, password) => {
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('i am in onAuthstateChanged and oveserving currentUser', currentUser);
            SetUser(currentUser)
            SetLoading(false)
        })
        return () => { unsubscribe() }
    })

    const LoginUser = (email, password) => {
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogoutUser = () => {
        return signOut(auth)
    }
    const authInfo = { createUser, LoginUser, user, LogoutUser,loading }
    return (

        < AuthContext.Provider value={authInfo}>

            {
                children
            }
        </AuthContext.Provider >
    );
};

export default AuthProvider;
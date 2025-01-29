import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Auth/Firebase/firebase.config";

export const Authcontext = createContext()

const AuthContextProvider = ({ children }) => {
    const googleProvider=new GoogleAuthProvider
    const [user, Setuser] = useState(null)
    const [loading, SetLoding] = useState(true)
    const CreateUSer = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUSer = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const LogOutUSer = () => {
        return signOut(auth)
    }

    const GooglElogin=()=>{
return signInWithPopup(auth,googleProvider)
    }

    useEffect(() => {
        const UnsubsCribe = onAuthStateChanged(auth, cruentUSer => {
            Setuser(cruentUSer);
            console.log('this is current user', cruentUSer);
            SetLoding(false)

        })

        return () => {
            UnsubsCribe();
        }
    }, [])

    const authinfo = {
        user,
        Setuser,
        CreateUSer,
        LoginUSer,
        LogOutUSer,
        GooglElogin,

    }
    return (
        <Authcontext.Provider value={authinfo}>
            {
                children
            }
        </Authcontext.Provider>
    );
};

export default AuthContextProvider;
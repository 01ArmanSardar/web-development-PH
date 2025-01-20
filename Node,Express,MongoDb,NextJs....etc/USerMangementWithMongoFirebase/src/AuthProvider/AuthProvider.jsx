import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../FirebaseNew/firebase.config";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null)
    const [loading, SetLoading] = useState(true)

    const CreateUSer = (email, password) => {
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const loginUSer = (email, password) => {
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userinfo = { CreateUSer, user, SetUser, loading,loginUSer }

    return (



        <AuthContext.Provider value={userinfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
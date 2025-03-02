import { createContext } from "react";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../FireBase/firebase.config";


const auth = getAuth(app)

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { createUser, LoginUser }
    return (

        < AuthContext.Provider value={authInfo}>

            {
                children
            }
        </AuthContext.Provider >
    );
};

export default AuthProvider;
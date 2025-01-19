import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const Authprovider = ({ children }) => {
    const [user, SetUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const CreateUSer = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = { user, SetUser, loading,CreateUSer }

    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Authprovider;
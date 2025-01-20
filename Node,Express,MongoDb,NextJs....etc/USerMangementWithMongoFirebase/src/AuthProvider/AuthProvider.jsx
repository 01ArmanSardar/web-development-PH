import { createContext } from "react";

const AuthContext=createContext(null)


const AuthProvider = ({children}) => {
    const userinfo={name:'arman'}
 
    return (


        
       <AuthContext.Provider value={userinfo}>
        {
            children
        }
       </AuthContext.Provider>
    );
};

export default AuthProvider;
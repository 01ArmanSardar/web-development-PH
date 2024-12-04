import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState()
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const handelGoogleLogin = () => {
        console.log('click on google login');
        signInWithPopup(auth, provider)
            .then(result => {
                const LogidinUser = result.user
                setUser(LogidinUser)
                console.log(LogidinUser);
            })
            .catch(error => console.log(error.message))
    }
    const handelLogout = () => {
        signOut(auth)
            .then(result => {
                setUser(null)
                console.log(result)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>{
            user ?
            
            <button className="btn btn-square bg-orange-400" onClick={handelLogout}> Glogout </button>:
            <button className="btn btn-square bg-orange-400" onClick={handelGoogleLogin}>Glogin</button>
            }
        
            {
                user && <div>
                    <h1>USer:{user.displayName
                    }</h1>
                    <p>Email:{user.email}</p>
                </div>
            }
        </div>
    );
};

export default Login;
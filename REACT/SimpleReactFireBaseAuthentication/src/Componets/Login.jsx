import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.init";

const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const handelGoogleLogin = () => {
        console.log('click on google login');
        signInWithPopup(auth, provider)
            .then(result => console.log(result.user))
            .catch(error=>console.log(error.message))
    }
    return (
        <div>
            <button className="btn btn-square bg-orange-400" onClick={handelGoogleLogin}>Glogin</button>
        </div>
    );
};

export default Login;
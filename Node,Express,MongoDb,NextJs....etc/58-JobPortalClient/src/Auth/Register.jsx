import Lottie from "lottie-react";
import RegisterAnimationdata from '../assets/Lottie/Animation - 1738055883514.json'
import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext/AuthContextProvider";
import GoogleLogin from "../Page/CommonComponents/GoogleLogin";
const Register = () => {
    const { CreateUSer } = useContext(Authcontext)
    const handelRegisterForm = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        //password validation 
        CreateUSer(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(erro => {
                console.log(erro);
            })
        console.log(email, password);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie animationData={RegisterAnimationdata}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handelRegisterForm} action="">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <GoogleLogin></GoogleLogin>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;
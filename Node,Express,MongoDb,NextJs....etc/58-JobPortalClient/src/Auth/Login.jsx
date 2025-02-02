import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext/AuthContextProvider";
import loginLotiieAnimation from '../../src/assets/Lottie/Login.json'
import Lottie from "lottie-react";
import GoogleLogin from "../Page/CommonComponents/GoogleLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const { LoginUSer } = useContext(Authcontext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('locatED  in login page', location);
    const from = location.state || '/';
    const handelLoginFrom = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        LoginUSer(email, password)
            .then(result => {
                console.log(result.user);
                const user = { email: email }
                axios.post('http://localhost:3000/jwt', user,{withCredentials:true})
                    .then(res => console.log(res.data))
                navigate(from)
            })
            .catch(err => {
                console.log(err);
            })

        console.log(email, password);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie animationData={loginLotiieAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handelLoginFrom} action="">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <GoogleLogin></GoogleLogin>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
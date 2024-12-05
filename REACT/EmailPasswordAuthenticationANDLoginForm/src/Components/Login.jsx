import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import app from "../FireBase/Firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null)
    const HandelRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("click in login form");
        console.log(email, password);

        //
        const auth = getAuth(app)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const Luser = result.user
                setUser(Luser)
                console.log('done login');
            }

            )
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={HandelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    {/* <h1>User:{user.displayName}</h1> */}
                </div>
            </div>
        </div>
    );
};

export default Login;
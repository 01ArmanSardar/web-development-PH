import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const LoginPage = () => {

    const { loginUSer } = useContext(AuthContext)

    const HandeLLoginUSEr = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        loginUSer(email, password)
            .then(result => {
                console.log(result.user);
                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime

                }
                fetch('http://localhost:5000/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)

                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                })

            })
            .catch(err =>
                console.log(err)
            )
        console.log(email, password);

    }
    return (
        <div>
            <h1>this login page</h1>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={HandeLLoginUSEr} className="card-body">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
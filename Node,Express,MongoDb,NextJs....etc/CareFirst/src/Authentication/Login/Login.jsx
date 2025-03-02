import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const { LoginUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // const HandelRegister = () => {

    // }

    const onSubmit = (data) => {
        const email = data.email
        const password = data.password

        LoginUser(email, password)
            .then(res => console.log(res.user))
            .catch(err => console.log(err))



    }
    return (
        <div>
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
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">name</label>
                                    <input placeholder="name" className="input" type="text" {...register('name')} />

                                    {/* <input {...register("exampleRequired", { required: true })} /> */}
                                    <label className="fieldset-label">email</label>
                                    <input placeholder="email" className="input" type="text" {...register('email', { required: true })} />
                                    {errors.email && <span>this field is required</span>}

                                    <label className="fieldset-label">Password</label>
                                    <input placeholder="password" className="input" type="password" {...register('password', { required: true })} />
                                    {errors.password && <span>this is field is required</span>}

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
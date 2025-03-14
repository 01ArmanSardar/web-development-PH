
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm()

    // const HandelRegister = () => {

    // }

    const onSubmit = (data) => {
        const email = data.email
        const password = data.password

        createUser(email, password)
            .then(result => {
                const useremail=result.user.email
                const USERemail ={useremail}
                console.log(USERemail);
                axios.post(`http://localhost:5000/user`, USERemail)
                console.log(result.user)
            })
            .catch(error => console.log(error))

        reset()

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
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
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
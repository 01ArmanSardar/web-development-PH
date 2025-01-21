import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { FaEyeSlash } from "react-icons/fa";

import { FaEye } from "react-icons/fa";
import { TiInfoOutline } from "react-icons/ti";
import Swal from 'sweetalert2'


const Register = () => {
    const [showPassword, SetSHowPasseord] = useState(false)
    const { CreateUSer,SetuSer } = useContext(AuthContext)
    // Here is what I had so far. The expression checked if the password has eight characters including one uppercase letter, one lowercase letter, and one number or special character.
    const regix = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    const HandelRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password);

        if (regix.test(password)) {
            CreateUSer(email, password)
                .then(result => {
                    console.log(result.user);
                    SetuSer(result.user)
                    Swal.fire({
                        icon: "success",
                        title: "Great",
                        text: "Registerd succesfully",
                      
                      });
                })
                .catch(err => {
                    console.log(err);
                    Swal.fire({
                        icon: "error",
                       
                        text: "authentication error!",
                        
                      });

                })
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Validation is Invalid!",
                
              });
        }
    }
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={HandelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span> {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="" onClick={() => document.getElementById('my_modal_5').showModal()}><TiInfoOutline /></button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Warning !</h3>
                                            <p className="">1.contains at least eight characters,</p>
                                            <p>2.including at least one number and
                                            </p>
                                            <p>3.includes both lower and uppercase letters and
                                            </p>
                                            <p>4.include at least one special characters, #, ?, !.</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </label>
                                <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                                <span onClick={() => { SetSHowPasseord(!showPassword) }}>{showPassword ? <FaEyeSlash className="text-error -mt-2"></FaEyeSlash> : <FaEye className="text-success -mt-2"></FaEye>}</span>
                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                    <p>already have a account ? <Link className="font-semibold text-sky-950" to={'/login'}>login here</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
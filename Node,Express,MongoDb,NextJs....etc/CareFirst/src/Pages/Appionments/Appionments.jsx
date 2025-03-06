import { useState } from "react";
import axios from 'axios';


const Appionments = () => {
    // const [isopen, SetOpen] = useState(false)
    // const HandelOpen = () => SetOpen(true)
    // const HandelClose = () => SetOpen(false)
    const Handelform = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const userinfo = { email, password }
        console.log(email, password);
        document.getElementById("my_modal_5").close()
        axios.post('http://localhost:5000/appionments', userinfo)
            .then((res) => { console.log(res) })
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <h1>this is appionment page</h1>
            <div>
                <h1>please select a service </h1>
                <div className="flex justify-between">

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                        {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                        {/* <p className="py-4">Press ESC key or click the button below to close</p> */}


                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">

                                <form method="dialog" onSubmit={Handelform}>
                                    <fieldset className="fieldset">

                                        <label className="fieldset-label">Email</label>
                                        <input required name="email" type="email" className="input" placeholder="Email" />
                                        <label className="fieldset-label">Password</label>
                                        <input required name="password" type="password" className="input" placeholder="Password" />

                                        <button className="btn btn-neutral mt-4">Submit</button>

                                    </fieldset>
                                </form>

                            </div>
                        </div>






                    </dialog>


                    {/* <div >
                        <button onClick={HandelOpen} className="btn btn-secondary" >dental</button>

                        {

                            isopen && (
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
                                                <fieldset className="fieldset">
                                                    <form action="">
                                                    <label className="fieldset-label">Email</label>
                                                    <input type="email" className="input" placeholder="Email" />
                                                    <label className="fieldset-label">Password</label>
                                                    <input type="password" className="input" placeholder="Password" />
                                                    <div><a className="link link-hover">Forgot password?</a></div>
                                                    <button className="btn btn-neutral mt-4">Login</button>
                                                    </form>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div> */}


                </div>
            </div>



        </div>
    );
};

export default Appionments;
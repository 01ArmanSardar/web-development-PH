import axios from "axios";


const Appionment = ({ service }) => {

    const Handelform = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const userinfo = { email, password }
        console.log(email, password);
        form.reset()
        document.getElementById("my_modal_5").close()
        axios.post('http://localhost:5000/appionments', userinfo)
            .then((res) => { console.log(res) })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <div>


                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>{service}</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">

                            <form method="dialog" onSubmit={Handelform}>
                                <fieldset className="fieldset">
                                    <h1 className="text-center text-2xl"> {service}</h1>
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



            </div>
        </div>
    );
};

export default Appionment;
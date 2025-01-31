import { useParams } from "react-router-dom";
import UseAuth from "../../Context/AuthContext/UseAurth";
import Swal from 'sweetalert2'
const ApplyJOb = () => {
    const { id } = useParams()
    console.log(id);
    const { user } = UseAuth()
    const HandelApplyFrom = (e) => {
        e.preventDefault()
        
        
        console.log('in applyform page chek user', user);
        
        const form = e.target
        const Linkedin = form.Linkdein.value
        const github = form.github.value
        const resume = form.resume.value

        console.log(Linkedin, github, resume);
        const applicantInfo = {
            job_id: id,
            ApplicantEmail: user.email,
            Linkedin,
            github,
            resume
        }
        fetch('http://localhost:3000/ApplyJobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applicantInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId)
                {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })

    }
    return (
        <div>
            <h1>this job Appply page</h1>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div> */}
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1>Apply form</h1>

                            <fieldset className="fieldset">
                                <form onSubmit={HandelApplyFrom} >
                                    <label className="fieldset-label">Linkdein</label>
                                    <input type="url" name="Linkdein" className="input" placeholder="Linkedin url" />
                                    {/*  */}
                                    <label className="fieldset-label">GitHub</label>
                                    <input type="url" name="github" className="input" placeholder="Github Url" />
                                    {/*  */}
                                    <label className="fieldset-label">resume</label>
                                    <input type="url" name="resume" className="input" placeholder="resume Url" />

                                    {/* <button className="btn btn-neutral mt-4">Apply</button> */}
                                    <input className="btn btn-neutral mt-4" type="submit" value="Apply" />
                                </form>
                            </fieldset>


                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ApplyJOb;
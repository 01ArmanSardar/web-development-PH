import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";
const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const intid = parseInt(id)
    const job = jobs.find(job => job.id === intid)

    const HandelApply=()=>{
        toast("Applied Complete");
        saveJobApplication(intid)
    }
    return (
        <div>
            <h1>job details of</h1>
            <div className="gap-4 grid md:grid-cols-4">

                <div className="md:col-span-3 border-zinc-950 ">
                    <h1><strong>job Description :</strong>{job.job_description}</h1>
                    <br />
                    <h1><strong>Job Responsibility</strong>{job.job_responsibility}</h1>
                    <br />
                    <h1><strong>Educational Requirements:</strong>{job.educational_requirements}</h1>
                    <br />
                    <h1><strong>Experiences:</strong>{job.experiences}</h1>


                </div>
                <div style={{ border:'2px solid gray',borderRadius:'5px', textAlign:'center'}} className=" border-zinc-950">
                    <h1 style={{padding:'10px'}}>job details</h1>
                    <hr style={{borderTop:'2px solid green', marginLeft:'15px',marginRight:'15px'}}/>
                    <h1 style={{padding:'10px'}}><strong>salary: </strong>{job.salary}</h1>
                    <h1 style={{padding:'10px'}}><strong>job title: </strong>{job.job_title}</h1>
                    <br />
                    <h1 >Contact Information</h1>
                    <hr style={{borderTop:'2px solid green', marginLeft:'15px',marginRight:'15px'}} />
                    <h1 style={{padding:'10px'}}><strong>Phone : </strong>{job.contact_information.phone}</h1>
                    <h1 style={{padding:'10px'}}><strong>Email :</strong>{job.contact_information.email}</h1>
                    <h1 style={{padding:'10px'}}><strong>Address:  </strong>{job.contact_information.address}</h1>

                    <button onClick={()=>HandelApply()} style={{padding:'10px', margin:'5px'}} className="btn btn-primary ">Apply now</button>

                </div>
<ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;
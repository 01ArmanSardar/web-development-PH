import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import { key } from "localforage";


const AppliedJob = () => {
    const jobs = useLoaderData()
    const [appliedJob,SetAppliedJobs] =useState([])
    console.log(appliedJob);
    useEffect(() => {
        const getStoredJobs = getStoredJobApplication();
        //    console.log(typeof(getStoredJobs),'in applire'); 
        if (jobs.length > 0) {
            // const jobsApplied=jobs.filter(job=>)
            const jobsApplied = [];
            for (const id of getStoredJobs) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            // console.log(jobs, jobsApplied, getStoredJobs);
            SetAppliedJobs(jobsApplied)
        }
    }, [])
    return (
        <div>
<h1>Applied job page</h1>
<h2>jobs i Applied{appliedJob.length}</h2>
<ul>
    {
        appliedJob.map(job=><li key={job.id}>{job.company_name} , {job.remote_or_onsite}, {job.job_title}</li>)
    }
</ul>
        </div>
    );
};

export default AppliedJob;
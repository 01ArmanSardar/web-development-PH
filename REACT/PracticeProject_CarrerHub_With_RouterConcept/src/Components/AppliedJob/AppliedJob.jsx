import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";


const AppliedJob = () => {
    const jobs=useLoaderData()
    useEffect(()=>{
        const getStoredJobs=getStoredJobApplication()
    //    console.log(typeof(getStoredJobs),'in applire'); 
        if(jobs.length>0){
            // const jobsApplied=jobs.filter(job=>)
        }
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AppliedJob;
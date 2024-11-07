import { useEffect, useState } from "react";
import Featuredjob from "../Featuredjob/Featuredjob";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [Datalength, setDatalength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h1 className="text-5xl font-bold">this is Featured job Section</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, Datalength).map(job => <Featuredjob key={job.id} job={job}></Featuredjob>)
                }
            </div>
            <div className={Datalength===jobs.length ?'hidden':''}>
                <button className="btn btn-primary"
                onClick={()=>setDatalength(jobs.length)}
                >show all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
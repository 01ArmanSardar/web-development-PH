import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";


const HotJobs = () => {

    const [jobs, SetJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json()
            )
            .then(data => {
                SetJobs(data)


            })

    }, [])


    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {
                jobs.map(job => <HotJobCard job={job} key={job._id}></HotJobCard>)
            }
        </div>
    );
};

export default HotJobs;
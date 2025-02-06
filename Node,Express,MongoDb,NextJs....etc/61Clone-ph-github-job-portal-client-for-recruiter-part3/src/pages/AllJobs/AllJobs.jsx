import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useJob from "../../hooks/useJob";
import HotJobCard from "../Home/HotJobCard";


const AllJobs = () => {
    const [sort,Setsort]=useState(false)
    const [search,SetSearch]=useState('')
    const { jobs } = useJob(sort,search)
    console.log(jobs);
    console.log(search);
    
    console.log(sort);
    const { loading } = useAuth()
    if (loading){
        return <p className="text-9xl font-bold text-red-900">job is loading</p>
    }
    return (
        <div>
            {/* {loading ? <p className="text-9xl font-bold text-red-900">job is loading</p> : <>
                <h1>All jobs here</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                    }
                </div></>
            } */}
            <h1>All jobs here</h1>
            <div className="bg-base-200 flex items-center gap-3">
            <button onClick={()=>Setsort(!sort)} className={sort? `btn btn-success`: `btn btn-primary`}>{sort?`sorted by salary`:`Sort by Salary`}</button>
           <input onKeyUp={(e)=>SetSearch(e.target.value)} type="text"  placeholder="search by location is here"/>
            </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                    }
                </div>
        </div>
    );
};

export default AllJobs;
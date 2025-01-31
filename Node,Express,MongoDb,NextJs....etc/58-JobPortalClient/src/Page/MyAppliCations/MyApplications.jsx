import { useEffect, useState } from "react";
import UseAuth from "../../Context/AuthContext/UseAurth";



const MyApplications = () => {

    const { user } = UseAuth()

    // const email=user?.email
    // console.log(email);
    const [jobs, SetJobs] = useState([])
    // console.log(user.email);

    useEffect(() => {

        fetch(`http://localhost:3000/ApplyJobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => SetJobs(data))
    }, [user?.email])

    return (
        <div>
            <h1>this is my application page</h1>
            <p>appplication length{jobs.length}</p>


            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>gmail</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      {
        jobs.map(job=><tr key={job._id}>
            <th>
              
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={job.company_logo}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{job.title}</div>
                  <div className="text-sm opacity-50">{job.location}</div>
                </div>
              </div>
            </td>
            <td>
             {job.location}
              <br />
              <span className="badge badge-ghost badge-sm">{job.company}</span>
            </td>
            <td>{job.ApplicantEmail}</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>)
      }
     
     
      
    </tbody>
    
  </table>
</div>


        </div>
    );
};

export default MyApplications;
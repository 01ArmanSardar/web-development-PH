import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {

    const JobApplicationsData = useLoaderData()
    const handelStatus = (e, id) => {
        console.log(e.target.value, id);
        const data = {
            status: e.target.value
        }
        fetch(`http://localhost:3000/ApplyJobs/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {console.log(data)
                if (data.modifiedCount){
                   
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "status update succes fully",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        
                }
            }
        )
    }
    console.log('this is viewapplication page', JobApplicationsData);
    return (
        <div>
            <h1>application for this job length {JobApplicationsData?.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>email</th>
                            <th>status</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            JobApplicationsData.map((job, idx) => <tr key={job._id}>
                                <th>{idx + 1}</th>
                                <td>{job.ApplicantEmail}</td>
                                <td>
                                    <select onChange={(e) => handelStatus(e, job._id)} defaultValue={job.status || 'change status'} className="select select-sm">
                                        <option disabled={true}>change Status</option>
                                        <option>got hired</option>
                                        <option>get inteview</option>
                                        <option>rejected</option>
                                    </select>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewApplication


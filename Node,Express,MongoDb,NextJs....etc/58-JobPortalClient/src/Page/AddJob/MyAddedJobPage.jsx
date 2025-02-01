import { useEffect, useState } from "react";
import UseAuth from "../../Context/AuthContext/UseAurth";


const MyAddedJobPage = () => {
    const [myAddedJob, SetmyAddedJOb] = useState([])
    const { user } = UseAuth()


    useEffect(() => {

        fetch(`http://localhost:3000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data =>
                SetmyAddedJOb(data)
            )
    }, [user?.email])
    return (
        <div>
            <h1>this iis my add job page</h1>
            <h1>my addded job length {myAddedJob.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myAddedJob.map((job,index) => <  tr key={job._id}>
                                <th>{index+1}</th>
                                <td>{job.title}</td>
                                <td>{job.location}</td>
                                <td>Red</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAddedJobPage;
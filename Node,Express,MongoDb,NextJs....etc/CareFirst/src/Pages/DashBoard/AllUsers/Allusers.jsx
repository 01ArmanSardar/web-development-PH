import axios from "axios";
import { useState } from "react";

const Allusers = () => {
    const [users, setUSers] = useState(null)
    axios.get('http://localhost:5000/user')
        .then(res => {
            setUSers(res.data)
        })

    // console.log(users);


    return (
        <div>
            <h1>users lenght is  {users?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>email</th>
                            <th>role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user,idx) =>  <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.useremail}</td>
                                    <td><button className="btn btn-info">MakeAdmin</button></td>
                                    <td><button className="btn btn-warning">Delete</button></td>
                                </tr>
                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const LoadedUsers = useLoaderData()
    const [users, SetUsers] = useState(LoadedUsers)

    return (
        <div>
            <h1 className="text-5xl ">this is home </h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Created on</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => 
                                <tr key={user._id}>
                                <th></th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.CreationTime}</td>
                                <td><button>edit</button> <button>Delete</button> </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
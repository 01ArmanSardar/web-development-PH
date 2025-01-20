import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Home = () => {
    const LoadedUsers = useLoaderData()
    const [users, SetUsers] = useState(LoadedUsers)

    // const HandelUpdateUSer = (id) => {

    // }
    const HandelDeeleteUSer = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${id}`, {
                    method: 'DELETE'
                }

                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaing = users.filter(user => user._id != id)
                        SetUsers(remaing)
                    })
            }
        });
    }

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
                            <th>Last Logged</th>
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
                                    <td>{user?.lastLoggedAt}</td>
                                    <td>
                                        <button >edit</button>

                                        <button onClick={() => HandelDeeleteUSer(user._id)} className="btn btn-warning">Delete</button>
                                    </td>
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
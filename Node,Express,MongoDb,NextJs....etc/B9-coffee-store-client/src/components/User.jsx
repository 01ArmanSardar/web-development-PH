
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
    const loadedUSers = useLoaderData()
    const [users, Setusers] = useState(loadedUSers)
    const handelUSerDeleteOpertaion = id => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = users.filter(user => user._id != id)
                    Setusers(remaining)
                    console.log(data);
                }
            })

    }
    return (
        <div>
            <h1>length of user{loadedUSers.length}</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>
                                <th>#</th>
                                <td>{user.email}</td>
                                <td><button className="btn btn-primary">edit</button> <button onClick={() => handelUSerDeleteOpertaion(user._id)} className="btn btn-accent">delete</button> </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
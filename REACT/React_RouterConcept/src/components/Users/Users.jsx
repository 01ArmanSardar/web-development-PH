import { useLoaderData, } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    
    const users=useLoaderData()
    // console.log(users);
    return (
        <div>
            <h1>this is USer page</h1>
            <h4>users length{users.length}</h4>
            <div className="grid grid-cols-4 gap-4">
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;
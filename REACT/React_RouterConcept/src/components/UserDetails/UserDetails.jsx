import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user=useLoaderData()
    const {name,phone,website}=user
    return (
        <div className="rounded border-2 border-indigo-600 bg-lime-700 text-red-200">
            <h2>user details page</h2>
            <h4>user name :{name}</h4>
            <p>phone {phone}</p>
            <p>website {website}</p>
        </div>
    );
};

export default UserDetails;
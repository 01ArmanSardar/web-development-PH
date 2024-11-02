import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user=useLoaderData()
    const nevigate=useNavigate()
    const goBackClick=()=>{
        nevigate(-1)
    }
    const GobackHome=()=>{
        nevigate('/')
    }
    const {name,phone,website}=user
    return (
        <div className="rounded border-2 border-indigo-600 bg-lime-700 text-red-200">
            <h2>user details page</h2>
            <h4>user name :{name}</h4>
            <p>phone {phone}</p>
            <p>website {website}</p>
            <button onClick={goBackClick} >Previous page</button>
            <br />
            <button onClick={GobackHome}>Go Home</button>

            
        </div>
    );
};

export default UserDetails;
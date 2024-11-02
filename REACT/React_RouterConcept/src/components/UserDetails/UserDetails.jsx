import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const user=useLoaderData()
    const {userId}=useParams() //The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
    console.log(userId);
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
import { Link, useNavigate } from "react-router-dom";

Link
const User = ({user}) => {
    const {name,email,id}=user
    const nevigate=useNavigate() //useNavigate akta hook
    const UseNavigateclick=()=>{
        nevigate(`/user/${id}`) //toh ai navigate a jeh url tah dibho sei url e jabhe
    }
    console.log(name,email);
    return (
        <div className="rounded bg-red-300 font-medium border-2 border-indigo-600">
            <h1> name :{name}</h1>
            <h5>email:{email}</h5>
            <Link to={`/user/${id}`}>Show Details</Link> <br />
            <button onClick={UseNavigateclick}>navigate details</button>
        </div>
    );
};

export default User;
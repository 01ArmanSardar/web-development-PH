import { Link } from "react-router-dom";

Link
const User = ({user}) => {
    const {name,email,id}=user
    console.log(name,email);
    return (
        <div className="rounded bg-red-300 font-medium border-2 border-indigo-600">
            <h1> name :{name}</h1>
            <h5>email:{email}</h5>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Profile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <h1>This is Profile for this is email user : <strong>{user.email}</strong></h1>
        </div>
    );
};

export default Profile;
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Home = () => {
    const AUthinfo=useContext(AuthContext)
    return (
        <div>
        <h1>this is home {AUthinfo.name}</h1>
        </div>
    );
};

export default Home;
import { useContext } from "react";
import { Authcontext } from "../../Context/AuthContext/AuthContextProvider";


const GoogleLogin = () => {
    const {GooglElogin}=useContext(Authcontext)

    const HandelGoogleLogin=()=>{
        GooglElogin()
        .then(result=>{
            console.log(result.user);
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    return (
        <div className="m-5">
            <div className="divider divider-accent">OR</div>
           <button onClick={HandelGoogleLogin} className="btn btn-primary">goooogle</button> 
        </div>
    );
};

export default GoogleLogin;
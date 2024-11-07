import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1> OPPS!</h1>
           <Link to={'/'}><button >tap here to go home</button></Link> 
        </div>
    );
};

export default ErrorPage;
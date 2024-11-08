import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="bg-rose-800 items-center">Opps any erroe occure</h1>
            <Link to={'/'} className="items-center">go to Home</Link>
            
        </div>
    );
};

export default ErrorPage;
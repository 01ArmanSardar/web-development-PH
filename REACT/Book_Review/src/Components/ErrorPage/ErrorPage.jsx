import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="bg-rose-800 items-center text-gray-50">Opps any erroe occure</h1>
            <Link to={'/'} className="items-center"> <button>go to Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;
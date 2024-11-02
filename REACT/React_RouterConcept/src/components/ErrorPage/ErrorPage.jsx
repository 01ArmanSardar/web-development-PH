import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError()
    console.log(error);
    return (
       
    <div>
        <h1>Opps One error found</h1>
        <p> <strong>{error.error.message}</strong></p>
    </div>
    );
};

export default ErrorPage;
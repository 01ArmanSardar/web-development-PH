import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Root from "../LayOut/Root/Root";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);


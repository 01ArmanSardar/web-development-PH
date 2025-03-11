import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Root from "../LayOut/Root/Root";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import Appionments from "../Pages/Appionments/Appionments";
import PrivateRoutes from "./PrivateRoutes";
import DashBoardHOme from "../Pages/DashBoard/Home/DashBoardHOme";
import Allusers from "../Pages/DashBoard/AllUsers/Allusers";

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
            },
            {
                path: '/dashBoard',
                element: <PrivateRoutes><DashBoardHOme></DashBoardHOme></PrivateRoutes>
            },
            {
                path: '/appionment',
                element: <PrivateRoutes><Appionments></Appionments></PrivateRoutes>
            }
            ,
            {
                path: '/Allusers',
                element: <PrivateRoutes><Allusers></Allusers></PrivateRoutes>
            }
        ]
    },
]);


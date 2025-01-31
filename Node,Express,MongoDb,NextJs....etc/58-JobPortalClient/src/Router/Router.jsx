import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import JobDetails from "../Page/JobDetails/JobDetails";
import PrivateROute from "./PrivateROute";
import ApplyJOb from "../Page/JobApply/ApplyJOb";
import MyApplications from "../Page/MyAppliCations/MyApplications";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <h1> this route not implimentend</h1>,
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
                path: '/Myapplications',
                element:<MyApplications></MyApplications>
            },
            {
                path: '/jobDetails/:id',
                element: <PrivateROute><JobDetails></JobDetails></PrivateROute>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)

            },

            {
                path: '/ApplyJob/:id',
                element: <ApplyJOb></ApplyJOb>
            }
        ]
    },
]);

export default Router;
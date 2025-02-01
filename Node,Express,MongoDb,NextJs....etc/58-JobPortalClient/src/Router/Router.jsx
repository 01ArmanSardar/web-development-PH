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
import Addjob from "../Page/AddJob/Addjob";
import MyAddedJobPage from "../Page/AddJob/MyAddedJobPage";
import ViewApplication from "../Page/viewApplication/viewApplication";

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
                element: <MyApplications></MyApplications>
            },
            {
                path: '/jobDetails/:id',
                element: <PrivateROute><JobDetails></JobDetails></PrivateROute>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)

            },
            {
                path: '/viewAPplicaton/:job_id',
                element: <ViewApplication></ViewApplication>,
                loader:({params})=>fetch(`http://localhost:3000/applyjobs/jobs/${params.job_id}`)
            },


            {
                path: '/addjob',
                element: <Addjob></Addjob>
            },
            {
                path: '/MyaddedJob',
                element: <MyAddedJobPage></MyAddedJobPage>
            },

            {
                path: '/ApplyJob/:id',
                element: <ApplyJOb></ApplyJOb>
            }
        ]
    },
]);

export default Router;
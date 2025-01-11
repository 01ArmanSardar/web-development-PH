import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Layout/Root';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import AuthProvider from './Page/CommonComponents/AuthProvider';
import HouseDetails from './Page/Home/HouseDetails';
import PrivateRoute from './Route/PrivateRoute';



const router = createBrowserRouter(

  [
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>,
        },

        {
          path: '/Register',
          element: <Register></Register>
        },
        {
          path: '/houses/:id',
          element: <PrivateRoute><HouseDetails></HouseDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/houses/${params.id}`),
        },

      ]
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

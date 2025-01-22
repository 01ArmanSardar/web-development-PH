import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './LayOut/Root';
import Home from './Componets/Home';
import Register from './Componets/Register';
import Login from './Componets/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import Details from './Componets/Details';
import PrivateRoute from './Commoncomponents/PrivateRoute';

const router = createBrowserRouter([
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
        path: '/details/:id',
        element:<PrivateRoute> <Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/touristSpot/${params.id}`)
      }

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

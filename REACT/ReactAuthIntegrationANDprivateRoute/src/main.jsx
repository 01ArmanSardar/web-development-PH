import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componentts/Root';
import Home from './Componentts/Home';
import Register from './Componentts/Register';
import Login from './Componentts/Login';
import AuthProvider from './Componentts/AuthProvider';
import Orders from './Componentts/Orders';
import Private_Routes from './Routes/Private_Routes';
import Profile from './Componentts/Profile';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    // {
    //   path: '/Navbar',
    //   element: <></>
    // },
    {
      path: '/Register',
      element: <Register></Register>
    },

    {
      path: '/Login',
      element: <Login></Login>
    },
    {
      path: '/Orders',
      element: <Private_Routes><Orders></Orders></Private_Routes>
    },
    {
      path: '/Profile',
      element: <Private_Routes><Profile></Profile></Private_Routes>
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

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

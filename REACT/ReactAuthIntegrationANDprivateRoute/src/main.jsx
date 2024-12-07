import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/root';
import Home from './Components/home';
import Header from './Components/Header';
import Register from './Components/register';
import Login from './Components/login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/Navbar',
      element: <Header></Header>
    },
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
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Componets/Home';
import Header from './Componets/Header';
import Login from './Componets/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
      path:"/",
      element:<Home></Home>
      },
      {
      path:"/Header",
      element:<Header></Header>
      },
      {
        path:"/GLogin",
        element:<Login></Login>
      }
    ]
  }
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

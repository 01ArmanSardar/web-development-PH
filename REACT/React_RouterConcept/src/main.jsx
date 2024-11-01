import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users/Users.jsx'


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <div>this is first page</div>,
  // },
  {
    path: "/",
    element: <Home></Home >,

    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/users",
        element: <Users />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

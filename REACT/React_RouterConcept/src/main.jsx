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
import UserDetails from './components/UserDetails/UserDetails.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <div>this is first page</div>,
  // },
  {
    path: "/",
    element: <Home></Home >,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <Users />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "/user/:userId",// akhen : ai sign tar poreh jeh part tah aceh setah hocceh dynamic part
        element: <UserDetails />,
        // loader:({params})=>console.log(params)
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

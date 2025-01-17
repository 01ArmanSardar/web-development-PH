import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './components/AddCoffe.jsx';
import Updatecoffe from './components/Updatecoffe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffe')
  },
  {
    path: "addcoffe",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "Updatecoffe/:id",
    element: <Updatecoffe></Updatecoffe>,
    loader:({params})=>fetch(`http://localhost:5000/coffe/${params.id}`)
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

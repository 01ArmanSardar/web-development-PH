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
  },
  {
    path: "addcoffe",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "updatecoffe",
    element: <Updatecoffe></Updatecoffe>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

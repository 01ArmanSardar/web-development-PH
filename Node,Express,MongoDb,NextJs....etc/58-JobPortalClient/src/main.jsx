import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router.jsx';
import AuthContextProvider from './Context/AuthContext/AuthContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>

      <RouterProvider router={Router} />
    </AuthContextProvider>
  </StrictMode>,
)

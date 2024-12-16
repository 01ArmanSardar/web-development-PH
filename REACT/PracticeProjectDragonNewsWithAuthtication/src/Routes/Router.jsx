
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import NewsDetails from '../Pages/NewsDetailsPage/NewsDetails';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/news.json'),
      },
      {
        path: '/NewsDetails/:id',
        element: <PrivateRoute> <NewsDetails></NewsDetails> </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5173/NewsDetails/${params.id}`),

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

export default router;
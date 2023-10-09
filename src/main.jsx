import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Pages/Root';
import Home from './Component/Pages/Home';
import ServiceDetails from './Component/Services/ServiceDetails';
import Authproviders from './Providers/Authproviders';
import Register from './Component/Users/Register';
import Login from './Component/Users/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './Component/Pages/About';
import ErrorPage from './Component/Pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path : "/About",
        element : <About></About>
      },
      {
        path: "/services/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: () => fetch('../services.json')//warning: it is not a perfect way to load data
      },
      {
        path : "/Register",
        element : <Register></Register>
      },
      {
        path : "/Login",
        element : <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
      <RouterProvider router={router} />
    </Authproviders>

  </React.StrictMode>,
)


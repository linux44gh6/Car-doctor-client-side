import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home";
import CheckOut from "../componets/CheckOut";
import Registation from "../Pages/Registation";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Loign from "../Pages/Loign";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:'/checkout/:id',
          element:<PrivetRoute><CheckOut></CheckOut></PrivetRoute>
        },
        {
          path:'/register',
          element:<Registation></Registation>
        },
        {
          path:'/login',
          element:<Loign></Loign>
        }
      ]
    },
  ]);

  export default router;
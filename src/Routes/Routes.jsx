import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import CompanyDetails from "../Pages/CompanyDetails";
import MyProfile from "../Pages/MyProfile";
import About from "../Pages/About";
import UpdateProfile from "../Pages/UpdateProfile";
import Loader from "../Components/Loader/Loader";
import ForgotPassword from "../Pages/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/companies_data.json"),
        element: <Home></Home>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "updateProfile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "companyDetails/:id",
        loader: () => fetch("/companies_data.json"),
        element: (
          <PrivateRoutes>
            <CompanyDetails></CompanyDetails>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
]);

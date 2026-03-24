import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import { AddRecipes } from "../pages/AddRecipes";
import { AllRecipes } from "../pages/AllRecipes";
import { MyRecipes } from "../pages/MyRecipes";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import { Error } from "../pages/Error";
import RecipeDetailsPage from "../pages/RecipeDetailsPage";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPass";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allRecipes",
        element: <AllRecipes></AllRecipes>,
      },
      {
        path: "/myRecipes",
        element: 
        <PrivateRoute>
          <MyRecipes></MyRecipes>
        </PrivateRoute>,
      },
      {
        path: "/addRecipes",
        element: 
        <PrivateRoute>
          <AddRecipes></AddRecipes>
        </PrivateRoute>,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetailsPage></RecipeDetailsPage>,
      },
      {
        path: "/profile",
        element: 
        <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path:"forgotPassword",
        element: <ForgotPassword/>
      },
    ],
  },
]);

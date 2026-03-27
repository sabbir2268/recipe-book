import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import { AddRecipes } from "../pages/AddRecipes";
import { AllRecipes } from "../pages/AllRecipes";
import { MyRecipes } from "../pages/MyRecipes";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import { Error } from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPass";
import RecipeDetails from "../pages/RecipeDetails";
import UpdateRecipe from "../pages/UpdateRecipe";

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
        element: (
          <PrivateRoute>
            <MyRecipes></MyRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: "/addRecipes",
        element: (
          <PrivateRoute>
            <AddRecipes></AddRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: "/recipeDetails/:id",
        element: (
          <PrivateRoute>
            <RecipeDetails></RecipeDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateRecipe/:id",
        element: (
          <PrivateRoute>
            <UpdateRecipe></UpdateRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
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
        path: "forgotPassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);

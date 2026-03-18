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
import RecipeDetails from "../components/RecipeDetails";

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
        element: <MyRecipes></MyRecipes>,
      },
      {
        path: "/addRecipes",
        element: <AddRecipes></AddRecipes>,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetailsPage></RecipeDetailsPage>,
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
    ],
  },
]);

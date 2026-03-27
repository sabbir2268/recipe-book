import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { RecipeProvider } from "./context/RecipeProvider";
import { AuthProvider } from "./context/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RecipeProvider>
        <RouterProvider router={router} />
      </RecipeProvider>
    </AuthProvider>
  </StrictMode>,
);

import { useState, useEffect } from "react";
import { API_URL } from "../api";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { RecipesContext } from "./RecipesContext";
import Swal from "sweetalert2";

export const RecipeProvider = ({ children }) => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  // Fetch all recipes
  const fetchAllRecipes = async () => {
    try {
      const res = await fetch(`${API_URL}/recipes`);
      const data = await res.json();
      setAllRecipes(data);
    } catch (error) {
      console.error("Error fetching all recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRecipe = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This recipe will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`${API_URL}/recipes/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      // update state after delete
      setAllRecipes((prev) => prev.filter((r) => r._id !== id));

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Recipe has been deleted.",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete recipe",
      });
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); // store user info
      } else {
        setCurrentUser(null);
      }
    });

    fetchAllRecipes(); // fetch all recipes once
    return () => unsubscribe();
  }, []);

  const value = {
    allRecipes,
    setAllRecipes,
    loading,
    currentUser,
    handleDeleteRecipe,
  };

  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
};

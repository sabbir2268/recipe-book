import { useState, useEffect } from "react";
import { API_URL } from "../api";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { RecipesContext } from "./RecipesContext";

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
    try {
      await fetch(`${API_URL}/recipes/${id}`, {
        method: "DELETE",
      });

      // update state after delete
      setAllRecipes((prev) => prev.filter((r) => r._id !== id));
    } catch (error) {
      console.error(error);
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

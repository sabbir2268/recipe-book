import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import MyRecipeCard from "../components/MyRecipeCard";
import { useScrollToTop } from "../hooks/useScrollToTop";

export const MyRecipes = () => {
  useScrollToTop();
  const { allRecipes, loading, currentUser } = useContext(RecipesContext);

  // ✅ Filter recipes by current user's UID
  const userRecipes = allRecipes.filter(
    (recipe) => recipe.userId === currentUser?.uid,
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ChefHat className="w-8 h-8 text-[var(--foreground)]" />
        </div>
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">
          My Recipes
        </h1>
        <p className="text-gray-500">
          {userRecipes.length === 0
            ? "You don't have any recipes yet."
            : `You have ${userRecipes.length} ${
                userRecipes.length === 1 ? "recipe" : "recipes"
              }`}
        </p>
      </div>

      {/* Empty State */}
      {userRecipes.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-20"
        >
          <p className="text-gray-500 mb-6">
            Start adding your favorite recipes and showcase your culinary
            skills!
          </p>
          <Link
            to="/addRecipes"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Add Your First Recipe
          </Link>
        </motion.div>
      ) : (
        // Recipes Grid
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userRecipes.map((recipe, index) => (
            <MyRecipeCard key={recipe.id ?? index} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

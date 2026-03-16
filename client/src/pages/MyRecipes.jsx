import React from "react";
import myRecipeData from "../data/myrecipeData.json";
import { ChefHat } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import {motion} from "framer-motion"
import { Link } from "react-router";


// MyRecipesPage Component
export const MyRecipes = () => {
  const recipes = myRecipeData; // your JSON data

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ChefHat className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Recipes</h1>
        <p className="text-gray-500">
          {recipes.length === 0
            ? "You don't have any recipes yet."
            : `You have ${recipes.length} ${
                recipes.length === 1 ? "recipe" : "recipes"
              }`}
        </p>
      </div>

      {/* No Recipes Message */}
      {recipes.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-20"
        >
          <p className="text-gray-500 mb-6">
            Start adding your favorite recipes and showcase your culinary skills!
          </p>
          <Link to={"/addRecipes"} className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Add Your First Recipe
          </Link>
        </motion.div>
      ) : (
        // Recipes Grid
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};


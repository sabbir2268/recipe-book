import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";
import { Heart } from "lucide-react";

const RecipeDetails = () => {
  const { id } = useParams();
  const { allRecipes } = useContext(RecipesContext);

  const recipe = allRecipes.find((r) => r._id === id);

  // State for like button
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-xl text-gray-600 font-medium">Recipe not found!</p>
        <Link
          to="/allRecipes"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Back to All Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {/* Cuisine Type + Prep Time */}
      <div className="flex items-center gap-6 mb-4 text-gray-700">
        <span>
          <strong>Cuisine:</strong> {recipe.cuisineType}
        </span>
        <span>
          <strong>Preparation Time:</strong> {recipe.preparationTime} min
        </span>
      </div>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded-lg mb-6"
      />

      {/* Ingredients */}
      <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
      <p className="text-gray-800 mb-4">{recipe.ingredients}</p>

      {/* Instructions */}
      <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
      <p className="text-gray-800 mb-6">{recipe.instructions}</p>

      <div className="flex items-center gap-5 mt-6">
        {/* Like Button */}
        <button
          onClick={toggleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            liked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          <Heart
            size={20}
            className={liked ? "fill-white text-white" : "text-red-500"}
          />
          {liked ? "Liked" : "Like"}
        </button>

        {/* Back Button */}
        <Link
          to="/allRecipes"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Back to All Recipes
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;

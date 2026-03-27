import { Heart, Clock } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";

const MyRecipeCard = ({ recipe }) => {
  const { handleDeleteRecipe } = useContext(RecipesContext);
  const navigate = useNavigate();

  return (
    <div className="bg-[var(--card)] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border)] hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />

        {/* Cuisine Badge */}
        <span className="absolute top-3 right-3 bg-[var(--secondary)] text-[var(--foreground)] px-3 py-1 text-xl rounded-full shadow">
          {recipe.cuisineType}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-2xl text-[var(--foreground)] line-clamp-2">
          {recipe.title}
        </h3>

        {/* Time + Likes */}
        <div className="flex items-center gap-5 text-xl text-[var(--foreground)]/70">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{recipe.preparationTime} min</span>
          </div>

          <div className="flex items-center gap-1">
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>{recipe.likeCount}</span>
          </div>
        </div>

        {/* ✅ Category */}
        <p className="text-sm text-[var(--foreground)]/80">
          <strong>Category:</strong>{" "}
          {Array.isArray(recipe.categories)
            ? recipe.categories.join(", ")
            : recipe.categories}
        </p>

        {/* ✅ Ingredients */}
        <p className="text-sm text-[var(--foreground)]/80 line-clamp-2">
          <strong>Ingredients:</strong> {recipe.ingredients}
        </p>

        {/* ✅ Instructions */}
        <p className="text-sm text-[var(--foreground)]/80 line-clamp-2">
          <strong>Instructions:</strong> {recipe.instructions}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-3">
          {/* ✅ Update */}
          <button
            onClick={() => navigate(`/updateRecipe/${recipe._id}`)}
            className="flex-1 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition py-2"
          >
            Update
          </button>

          {/* ✅ Delete */}
          <button
            onClick={() => handleDeleteRecipe(recipe._id)}
            className="flex-1 bg-red-700 text-white rounded-lg hover:bg-red-600 transition py-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyRecipeCard;

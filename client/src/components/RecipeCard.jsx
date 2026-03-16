import { Heart, Clock } from "lucide-react";

const RecipeCard = ({ recipe }) => {
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

        {/* Button */}
        <button className="w-full mt-3 py-2 bg-[var(--primary)] text-black rounded-lg hover:opacity-90 transition">
          View Details
        </button>

      </div>

    </div>
  );
};

export default RecipeCard;
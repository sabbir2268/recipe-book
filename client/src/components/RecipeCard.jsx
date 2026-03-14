import { Heart, Clock } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border hover:-translate-y-2">

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />

        {/* Cuisine Badge */}
        <span className="absolute top-3 right-3 bg-white/90 px-3 py-1 text-sm rounded-full shadow">
          {recipe.cuisineType}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">

        <h3 className="font-semibold text-lg line-clamp-2">
          {recipe.title}
        </h3>

        {/* Time + Likes */}
        <div className="flex items-center gap-5 text-sm text-gray-500">

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
        <button className="w-full mt-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
          View Details
        </button>

      </div>
    </div>
  );
};

export default RecipeCard;
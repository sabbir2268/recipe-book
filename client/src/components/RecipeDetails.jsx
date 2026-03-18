import { Heart, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const RecipeDetails = ({ recipe }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(recipe.likeCount);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Interest */}
        <div className="mb-6 flex items-center gap-2 text-gray-500">
          <Users className="w-5 h-5" />
          <span>
            <span className="font-semibold text-black">{likeCount}</span> people
            interested
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div>
            <div className="h-72 lg:h-96 rounded-xl overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Like Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleLike}
              className="mt-4 w-full h-12 rounded-lg flex items-center justify-center gap-2 font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              <Heart
                className={`w-5 h-5 transition-colors duration-300 ${
                  liked ? "text-red-500 fill-red-500" : "text-gray-500"
                }`}
              />
              Like Recipe
            </motion.button>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-3">{recipe.title}</h1>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {recipe.cuisineType}
                </span>

                {recipe.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <Clock className="w-5 h-5" />
                {recipe.preparationTime} minutes
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <p className="whitespace-pre-line">{recipe.ingredients}</p>
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Instructions</h2>
              <p className="whitespace-pre-line">{recipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

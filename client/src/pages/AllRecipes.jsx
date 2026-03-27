import { useContext } from "react";
import { motion } from "framer-motion";
import RecipeCard from "../components/RecipeCard";
import { RecipesContext } from "../context/RecipesContext";
import Loading from "../components/Loading";

export const AllRecipes = () => {
  const { allRecipes, loading } = useContext(RecipesContext);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!allRecipes || allRecipes.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">No recipes found</h2>
        <p className="text-gray-500">Check back later for delicious recipes!</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          All Recipes
        </h1>
        <p className="text-gray-500 mt-2">
          Explore all delicious recipes from our collection
        </p>
      </div>

      {/* Recipe Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {allRecipes.map((recipe, index) => (
          <RecipeCard key={recipe._id ?? index} recipe={recipe} />
        ))}
      </motion.div>
    </section>
  );
};

import recipeData from "../data/recipeData.json";
import RecipeCard from "../components/RecipeCard";

export const AllRecipes = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">All Recipes</h1>
        <p className="text-muted-foreground mt-2">
          Explore all delicious recipes from our collection
        </p>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipeData.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

    </section>
  );
};
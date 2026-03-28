import { Link } from "react-router-dom";
import { Home, ChefHat } from "lucide-react";
import MotionWrapper from "../components/MotionWrapper";
import { useScrollToTop } from "../hooks/useScrollToTop";

export const Error = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6">
      <MotionWrapper className="text-center max-w-md sm:max-w-lg lg:max-w-xl w-full">
        {/* Illustration */}
        <div className="mb-6 sm:mb-8">
          <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 mx-auto bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 rounded-full flex items-center justify-center">
            <ChefHat className="w-14 h-14 sm:w-18 sm:h-18 lg:w-24 lg:h-24 text-[var(--primary)]" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[var(--primary)] mb-2">
          404
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3">
          Recipe Not Found
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 px-2 sm:px-6">
          Oops! Looks like this recipe has been eaten or never existed.
        </p>

        {/* Quote */}
        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm italic text-muted-foreground">
            "A recipe not found is a recipe not yet created."
          </p>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-[var(--primary)] text-white rounded-lg sm:rounded-xl hover:bg-[var(--primary)]/90 transition-all hover:scale-105 font-medium sm:font-semibold text-sm sm:text-base lg:text-lg shadow-md"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          Go Back Home
        </Link>

        {/* Links */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
          <Link
            to="/recipes"
            className="text-[var(--primary)] hover:underline font-semibold"
          >
            Browse Recipes
          </Link>

          <span className="hidden sm:block text-muted-foreground">•</span>

          <Link
            to="/add-recipe"
            className="text-[var(--primary)] hover:underline font-semibold"
          >
            Add Recipe
          </Link>
        </div>
      </MotionWrapper>
    </div>
  );
};

import { useParams } from "react-router-dom";
import recipeData from "../data/recipeData.json";
import RecipeDetails from "../components/RecipeDetails";

const RecipeDetailsPage = () => {
  const { id } = useParams();

  const recipe = recipeData.find((item) => item.id === Number(id));

  if (!recipe) {
    return <Error></Error>;
  }

  return <RecipeDetails recipe={recipe} />;
};

export default RecipeDetailsPage;

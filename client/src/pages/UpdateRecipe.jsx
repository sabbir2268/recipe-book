import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";
import { Clock, Image as ImageIcon } from "lucide-react";
import Swal from "sweetalert2";
import { API_URL } from "../api";
import { useScrollToTop } from "../hooks/useScrollToTop";

const UpdateRecipe = () => {
  useScrollToTop();
  const { id } = useParams();
  const navigate = useNavigate();
  const { allRecipes, setAllRecipes } = useContext(RecipesContext);

  const recipe = allRecipes.find((r) => r._id === id);

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    ingredients: "",
    instructions: "",
    cuisineType: "",
    preparationTime: "",
    categories: [],
    likeCount: 0,
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        image: recipe.image,
        title: recipe.title,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        cuisineType: recipe.cuisineType,
        preparationTime: recipe.preparationTime,
        categories: recipe.categories || [],
        likeCount: recipe.likeCount || 0,
      });
    }
  }, [recipe]);

  const categoryOptions = ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (category) => {
    const exists = formData.categories.includes(category);
    if (exists) {
      setFormData({
        ...formData,
        categories: formData.categories.filter((c) => c !== category),
      });
    } else {
      setFormData({
        ...formData,
        categories: [...formData.categories, category],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/recipes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Update failed");
      }

      const updated = await res.json();

      // Update UI instantly
      setAllRecipes((prev) =>
        prev.map((r) => (r._id === id ? { ...r, ...updated } : r)),
      );

      // Success toast
      await Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Recipe updated successfully",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/myRecipes");
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update recipe",
      });
    }
  };

  if (!recipe) return <p className="text-center mt-10">Recipe not found</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-4">
      <div>
        <label className="flex items-center gap-2">
          <ImageIcon /> Recipe Image URL
        </label>
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Ingredients</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Instructions</label>
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Cuisine Type</label>
        <select
          name="cuisineType"
          value={formData.cuisineType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select cuisine</option>
          <option>Italian</option>
          <option>Mexican</option>
          <option>Indian</option>
          <option>Chinese</option>
          <option>American</option>
          <option>French</option>
          <option>Others</option>
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2">
          <Clock /> Preparation Time (minutes)
        </label>
        <input
          type="number"
          name="preparationTime"
          value={formData.preparationTime}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Categories</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-1">
          {categoryOptions.map((category) => (
            <label key={category} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={formData.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label>Like Count</label>
        <input
          type="number"
          value={formData.likeCount}
          disabled
          className="w-full border p-2 rounded bg-[var(--background)] cursor-not-allowed"
        />
      </div>

      <button
        type="submit"
        className="bg-[var(--primary)] text-white px-4 py-2 rounded"
      >
        Update Recipe
      </button>
    </form>
  );
};

export default UpdateRecipe;

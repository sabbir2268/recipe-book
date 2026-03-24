import { useState } from "react";
import { ChefHat, Image as ImageIcon, Clock } from "lucide-react";
 
export const AddRecipes = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    ingredients: "",
    instructions: "",
    cuisineType: "",
    preparationTime: "",
    categories: [],
  });

  const categoryOptions = ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-10 pt-10">
      <div className="max-w-4xl w-full bg-[var(--background)] shadow-lg rounded-2xl border p-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ChefHat className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-3xl font-bold mb-2">
            Add New Recipe
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-1">

          {/* Image URL */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2">
              <ImageIcon className="w-4 h-4" />
              Recipe Image URL
            </label>

            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded-lg h-11 px-3"
              required
            />
          </div>

          {/* Title */}
          <div>
            <label className="font-medium mb-2 block">
              Recipe Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Delicious Pasta Carbonara"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg h-11 px-3"
              required
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="font-medium mb-2 block">
              Ingredients
            </label>

            <textarea
              name="ingredients"
              rows="3"
              placeholder="List all ingredients separated by commas"
              value={formData.ingredients}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="font-medium mb-2 block">
              Cooking Instructions
            </label>

            <textarea
              name="instructions"
              rows="3"
              placeholder="Step-by-step instructions"
              value={formData.instructions}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          {/* Cuisine + Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="font-medium mb-2 block">
                Cuisine Type
              </label>

              <select
                name="cuisineType"
                value={formData.cuisineType}
                onChange={handleChange}
                className="w-full border rounded-lg h-11 px-3"
                required
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
              <label className="flex items-center gap-2 font-medium mb-2">
                <Clock className="w-4 h-4" />
                Preparation Time
              </label>

              <input
                type="number"
                name="preparationTime"
                value={formData.preparationTime}
                onChange={handleChange}
                placeholder="30"
                min="1"
                className="w-full border rounded-lg h-11 px-3"
                required
              />
            </div>

          </div>

          {/* Categories */}
          <div>
            <label className="font-medium block mb-3">
              Categories
            </label>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {categoryOptions.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2 text-sm cursor-pointer"
                >
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

          {/* Like Count */}
          <div>
            <label className="font-medium mb-2 block">
              Like Count
            </label>

            <input
              type="number"
              value="0"
              disabled
              className="w-full border rounded-lg h-11 px-3 bg-[var(--background)] cursor-not-allowed"
            />

            <p className="text-xs text-gray-500 mt-1">
              Likes will be counted automatically when users like your recipe
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-12 bg-[var(--primary)] text-white rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Add Recipe
          </button>

        </form>

      </div>
    </div>
  );
};

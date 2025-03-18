import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditRecipe = () => {
  const { recipeId } = useParams();  // Get recipeId from URL params
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    cuisine: "",
    time: "",
    serving: "",
    ingredients: [""],
    instructions: "",
    previewImage: "",
  });

  // Fetch recipe data when component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/recipe/${recipeId}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
      });
  }, [recipeId]);

  // Handle input changes
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Handle ingredient change
  const handleIngredientChange = (index, value) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  // Add new ingredient
  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  // Remove ingredient
  const removeIngredient = (index) => {
    const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", recipe.title);
    formData.append("category", recipe.category);
    formData.append("cuisine", recipe.cuisine);
    formData.append("time", recipe.time);
    formData.append("serving", recipe.serving);
    formData.append("ingredients", JSON.stringify(recipe.ingredients));
    formData.append("instructions", recipe.instructions);

    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    axios
      .put(`http://localhost:5000/api/recipes/${recipeId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("Recipe updated successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating recipe:", error);
      });
  };


  return (
    <div className="edit-recipe-container">
      <h2 className="form-title">✏️ Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="recipe-form">
        {/* Recipe Image */}
        <div className="form-group">
          <label>Upload New Image:</label>
          <input type="file" accept="image/*" onChange={(e) => setSelectedImage(e.target.files[0])} />
        </div>

        {/* Preview Existing Image */}
        {recipe.image && (
          <div>
            <p>Current Image:</p>
            <img src={`http://localhost:5000${recipe.image}`} alt="Recipe" width="200px" />
          </div>
        )}

        {/* Recipe Title */}
        <div className="form-group">
          <label>Recipe Title:</label>
          <input type="text" name="title" value={recipe.title} onChange={handleChange} required />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category:</label>
          <select name="category" value={recipe.category} onChange={handleChange} required>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Leftover Food">Leftover Food</option>
          </select>
        </div>

        {/* Cuisine */}
        <div className="form-group">
          <label>Cuisine:</label>
          <select name="cuisine" value={recipe.cuisine} onChange={handleChange} required>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Mexican">Mexican</option>
            <option value="French">French</option>
          </select>
        </div>

        {/* Cooking Time */}
        <div className="form-group">
          <label>Cooking Time (Minutes):</label>
          <input type="number" name="time" value={recipe.time} onChange={handleChange} min="1" required />
        </div>

        {/* Serving Size */}
        <div className="form-group">
          <label>Serving Size:</label>
          <input type="number" name="serving" value={recipe.serving} onChange={handleChange} min="1" required />
        </div>

        {/* Ingredients */}
        <div className="form-group">
          <label>Ingredients:</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-item">
              <input type="text" value={ingredient} onChange={(e) => handleIngredientChange(index, e.target.value)} required />
              {index > 0 && <button type="button" onClick={() => removeIngredient(index)}>❌</button>}
            </div>
          ))}
          <button type="button" onClick={addIngredient}>➕ Add Ingredient</button>
        </div>

        {/* Instructions */}
        <div className="form-group">
          <label>Instructions:</label>
          <textarea name="instructions" rows="4" value={recipe.instructions} onChange={handleChange} required></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipe;

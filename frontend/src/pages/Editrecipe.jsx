import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Assuming route-based editing

const Editrecipe = ({ recipes, updateRecipe }) => {
  const { id } = useParams(); // Get recipe ID from URL
  // const existingRecipe = recipes.find((r) => r.id === id);
  const existingRecipe = recipes;

  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    cuisine: "",
    time: "",
    serving: "",
    ingredients: [""],
    instructions: "",
    image: null,
    previewImage: null,
  });

  useEffect(() => {
    if (existingRecipe) {
      setRecipe({
        ...existingRecipe,
        previewImage: existingRecipe.image || null,
      });
    }
  }, [existingRecipe]);

  // Handle text input changes
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRecipe({
        ...recipe,
        image: file,
        previewImage: URL.createObjectURL(file),
      });
    }
  };

  // Handle ingredient change
  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  // Add new ingredient
  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  // Remove an ingredient
  const removeIngredient = (index) => {
    const updatedIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe);
    alert("Recipe Updated Successfully!");
  };
  return (
<>
    <div className="edit-recipe-container">
      <h2 className="form-title">✏️ Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="recipe-form">
        
        {/* Recipe Image Upload */}
        <div className="form-group image-upload">
          <label>Update Image:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {recipe.previewImage && (
            <img src={recipe.previewImage} alt="Preview" className="preview-image" />
          )}
        </div>

        {/* Recipe Title */}
        <div className="form-group">
          <label>Recipe Title:</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
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
          <input
            type="number"
            name="time"
            value={recipe.time}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        {/* Serving Size */}
        <div className="form-group">
          <label>Serving Size:</label>
          <input
            type="number"
            name="serving"
            value={recipe.serving}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        {/* Ingredients */}
        <div className="form-group">
          <label>Ingredients:</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-item">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                required
              />
              {index > 0 && (
                <button type="button" className="remove-btn" onClick={() => removeIngredient(index)}>❌</button>
              )}
            </div>
          ))}
          <button type="button" className="add-btn" onClick={addIngredient}>➕ Add Ingredient</button>
        </div>

        {/* Instructions */}
        <div className="form-group">
          <label>Instructions:</label>
          <textarea
            name="instructions"
            rows="4"
            value={recipe.instructions}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Update Recipe</button>
      </form>
    </div>
</>
  )
}

export default Editrecipe

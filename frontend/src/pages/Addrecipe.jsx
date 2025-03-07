import React from 'react'
import { useState } from "react";
import axios from 'axios';

const Addrecipe = () => {
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

  // Handle text inputs
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

  // Handle ingredient input changes
  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  // Add a new ingredient field
  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  // Remove an ingredient field
  const removeIngredient = (index) => {
    const updatedIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Submitted: ", recipe);
    alert("Recipe Submitted Successfully!");
  };
  return (
    <>
    <div className="add-recipe-container">
      <h2 className="form-title">➕ Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="recipe-form">
        
        {/* Recipe Image Upload */}
        <div className="form-group image-upload">
          <label>Upload Image:</label>
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
            placeholder="Enter recipe title..."
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category Selection */}
        <div className="form-group">
          <label>Category:</label>
          <select name="category" value={recipe.category} onChange={handleChange} required>
            <option value="">Select a category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Leftover Food">Leftover Food Items</option>
          </select>
        </div>

        {/* Cuisine Selection */}
        <div className="form-group">
          <label>Cuisine:</label>
          <select name="cuisine" value={recipe.cuisine} onChange={handleChange} required>
            <option value="">Select a cuisine</option>
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
            placeholder="Enter cooking time..."
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
            placeholder="Number of people..."
            value={recipe.serving}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        {/* Ingredients List */}
        <div className="form-group">
          <label>Ingredients:</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-item">
              <input
                type="text"
                placeholder={`Ingredient ${index + 1}`}
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
            placeholder="Enter step-by-step instructions..."
            value={recipe.instructions}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit Recipe</button>
      </form>
    </div>
    </>
  )
}

export default Addrecipe

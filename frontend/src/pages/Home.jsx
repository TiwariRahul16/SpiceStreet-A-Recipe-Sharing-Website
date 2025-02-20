import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(saved);

    const bookmarked = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSavedRecipes(bookmarked);
  }, []);

  // Function to bookmark a recipe
  const handleBookmark = (recipe) => {
    let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    if (!savedRecipes.some(r => r.name === recipe.name)) {
      savedRecipes.push(recipe);
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
      alert("Recipe bookmarked!");
    } else {
      alert("Already bookmarked!");
    }
  };

  return (
    <div className="container">

      {/* Recipe Cards Grid */}
      <div className="row row-cols-1 row-cols-md-3 g-4">  {/* 3 columns in medium+ screens */}
        {recipes.length === 0 ? (
          <p className="text-center w-100">No recipes. Click here to  
            <Link className="text-decoration-none text-black" to="/addrecipe"><b> "Add Recipe"</b></Link>
          </p>
        ) : (
          recipes.map((recipe, index) => (
            <div key={index} className="col">
              <div className="card shadow-lg p-3 h-100">

                {/* Recipe Image */}
                {recipe.imageUrl && (
                  <img
                    src={recipe.imageUrl}
                    className="card-img-top"
                    alt={recipe.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">{recipe.description.length > 40 ? `${recipe.description.substring(0, 40)}...` : recipe.description}</p>
                  <p><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>

                  {/* Limit Ingredients to One Line */}
                  <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ").length > 35
                    ? `${recipe.ingredients.join(", ").substring(0, 35)}...`
                    : recipe.ingredients.join(", ")}
                  </p>

                  {/* Limit Instructions to 100 characters */}
                  <p><strong>Instructions:</strong> {recipe.instructions.length > 60 ? `${recipe.instructions.substring(0, 60)}...` : recipe.instructions}</p>

                  {/* Bookmark Button */}
                  <button className="btn btn-warning mt-auto" onClick={() => handleBookmark(recipe)}>
                    Bookmark
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Home;

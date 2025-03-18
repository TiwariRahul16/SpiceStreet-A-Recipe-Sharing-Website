import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/SavedRecipes");
        setSavedRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error.response?.data || error.message);
      }
    };
  
    fetchRecipes();
  }, []);

    const DeleteRecipe = async(recipeId) => {
      try {
        const response = await axios.delete(`http://localhost:5000/api/deleteRecipes/${recipeId}`);
        if (response.status === 200) {
          alert("Recipe deleted successfully");
          console.log("Recipe deleted successfully");
        } else {
          alert("Failed to delete recipe");
        }
      } catch (error) {
        console.log("Error in deleting recipe",error);
      }
    }

  return (
    <div className='container my-4'>
      <h2>Saved Recipes</h2>
      {/* <div className='row'> */}
        {savedRecipes.length === "0" &&
          <p>No saved recipes yet.</p>
        }
        <section id="indian" className="recipepage-card mb-5">
        <h3 className="text-center mb-3">🍛 Indian Recipes</h3>
        <div className="row">
          {savedRecipes.map((recipe) => (
            <div className="col-md-4" key={recipe.recipeId}>
              <div className="card recipe-card1">
                <img src={`http://localhost:5000${recipe.image}`} className="card-img-top" alt={recipe.title} style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <h6>{recipe.Chef}</h6>
                  <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-primary">
                      View Recipe
                  </Link>
                  <button className="btn btn-outline-primary mx-2" onClick={()=>{DeleteRecipe(recipe.recipeId)}}>Delete Recipe</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* </div> */}
    </div>
  );
};

export default SavedRecipes;

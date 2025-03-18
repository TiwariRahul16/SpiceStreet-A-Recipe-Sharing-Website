import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Yourrecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [userName, setUserName] = useState(localStorage.getItem("username"));
  console.log("Logged-in user:", userName);

  useEffect(() => {
    if (userName) {
      getData();
    }
  }, [userName]);  // Fetch only when userName is set

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/getrecipe/${userName}`);
      console.log("Fetched Recipes:", response.data);
      setRecipes(response.data);
    } catch (error) {
      console.error("Your Recipe retrieving error:", error);
    }
  };

  const DeleteRecipe = async(recipeId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/deleteRecipe/${recipeId}`);
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
    <section className="featured-recipes py-5">
      <div className="container">
        <h2 className="text-center mb-4">Your Recipes</h2>
        <div className="row">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div className="col-md-4" key={recipe.recipeId}>
                <div className="card recipe-card my-2">
                  <img src={`http://localhost:5000${recipe.image}`} className="card-img-top" alt={recipe.title} />
                  <div className="card-body ">
                    <h5 className="card-title">{recipe.title}</h5>
                    <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-primary">
                      View Recipe
                    </Link>
                    <Link to={`/editrecipe/${recipe.recipeId}`} className="btn btn-outline-primary mx-2">
                      Edit Recipe
                    </Link>
                    <button className="btn btn-outline-primary" onClick={()=>{DeleteRecipe(recipe.recipeId)}}>Delete Recipe</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No recipes found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Yourrecipe;

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";


const RecipeCard = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error.response?.data || error.message);
      }
    };
    fetchRecipes();
  }, []);

  const SavedRecipe = async (recipeId) => {
    const selectedRecipe = recipes.find(recipe => recipe.recipeId === recipeId);
    if (!selectedRecipe) {
      console.error("Recipe not found");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/recipes/save", selectedRecipe, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        alert("Recipe saved successfully!");
      }
      if (response.status === 200) {
        alert("Recipe already saved");
      }
    } catch (error) {
      console.error("Error saving recipe:", error.response?.data || error.message);
    }
  };

  const handleSearch = () => {
    const lowercasedQuery = query.trim().toLowerCase();
  
    // Prevent searching for meaningless characters (like 'd', 'a', etc.)
    if (!lowercasedQuery || lowercasedQuery.length < 2) {
      setResults([]); // Show no results for short queries
      return;
    }
  
    // Search by exact food name match
    const byTitle = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(lowercasedQuery)
    );
  
    // Search by ingredients with word boundaries
    const byIngredients = recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) => 
        ingredient.toLowerCase().split(" ").some((word) => word === lowercasedQuery)
      )
    );
  
    // Merge results and remove duplicates
    const uniqueRecipes = [...new Set([...byTitle, ...byIngredients])];
    setResults(uniqueRecipes);
  };
  return (
    <>
      <main className="container my-4">
        {/* Explore Recipes Section */}
        <section className="mb-4">
          <div className="d-flex justify-content-between align-items-center">

            {/* Dropdown for Recipe Categories */}
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" id="recipeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Explore Recipes
              </button>
              <ul className="dropdown-menu profile_dropDown" aria-labelledby="recipeDropdown">
                <li><a className="dropdown-item" href="#dessert">🍰 Dessert</a></li>
                <li><a className="dropdown-item" href="#indian">🍛 Indian</a></li>
                <li><a className="dropdown-item" href="#italian">🍕 Italian</a></li>
                <li><a className="dropdown-item" href="#chinese">🥡 Chinese</a></li>
                <li><a className="dropdown-item" href="#mexican">🌮 Mexican</a></li>
                <li><a className="dropdown-item" href="#french">🥖 French</a></li>
                <li><a className="dropdown-item" href="#leftover">♻️ Leftover Recipes</a></li>
              </ul>
            </div>

            {/* Search Bar */}
            <div className="input-group w-50">
              <input type="text" className="form-control" placeholder="Search by recipes name or ingredients..." value={query} onChange={(e) => setQuery(e.target.value)} />
              <button className="btn btn-outline-primary mx-2" type="button" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </section>


      {results.length > 0 ? (
        <section id="dessert" className="recipepage-card mb-5">
          <h3 className="text-center mb-3">Result Recipes :</h3>
            <div className="row">
              {results.map((recipe) => (
                <div className="col-md-4" key={recipe.recipeId}>
                  <div className="card recipe-card1">
                    <img
                      src={`http://localhost:5000${recipe.image}`}
                      className="card-img-top"
                      alt={recipe.title}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{recipe.title}</h5>
                      <h6> By {recipe.Chef}</h6>
                      <h6>-- {recipe.ingredients.join(", ")} </h6>
                      <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-primary">
                        View Recipe
                      </Link>
                      <button className="btn btn-outline-primary mx-2" onClick={() => { SavedRecipe(recipe.recipeId) }}>Save Recipe</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </section>
          ) : (
            <p className="text-muted"></p>
          )}



        {/* Recipe Sections */}
        {results.length <= 0 && <div>
        <section id="dessert" className="recipepage-card mb-5">
          <h3 className="text-center mb-3">🍰 Dessert Recipes</h3>
          <div className="row">
            {recipes.filter((recipe) => recipe.category === "Dessert").map((recipe) => (
              <div className="col-md-4" key={recipe.recipeId}>
                <div className="card recipe-card1">
                  <img src={`http://localhost:5000${recipe.image}`} className="card-img-top" alt={recipe.title} style={{ height: "250px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <h6> By {recipe.Chef}</h6>
                    <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-primary">
                      View Recipe
                    </Link>
                    <button className="btn btn-outline-primary mx-2" onClick={() => { SavedRecipe(recipe.recipeId) }}>Save Recipe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="indian" className="recipepage-card mb-5">
          <h3 className="text-center mb-3">🍛 Indian Recipes</h3>
          <div className="row">
            {recipes.filter((recipe) => recipe.cuisine === "Indian").map((recipe) => (
              <div className="col-md-4" key={recipe.recipeId}>
                <div className="card recipe-card1">
                  <img src={`http://localhost:5000${recipe.image}`} className="card-img-top" alt={recipe.title} style={{ height: "250px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <h6> By {recipe.Chef}</h6>
                    <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-primary">
                      View Recipe
                    </Link>
                    <button className="btn btn-outline-primary mx-2" onClick={() => { SavedRecipe(recipe.recipeId) }}>Save Recipe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="italian" className="recipepage-card mb-5">
          <h3 className="text-center mb-3">🍕 Italian Recipes</h3>
          <div className="row">
            {recipes.filter((recipe) => recipe.cuisine === "Italian").map((recipe) => (
              <div className="col-md-4" key={recipe.recipeId}>
                <div className="card recipe-card1">
                  <img src={`http://localhost:5000${recipe.image}`} className="card-img-top" alt={recipe.title} style={{ height: "250px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <h6> By {recipe.Chef}</h6>
                    <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-primary">
                      View Recipe
                    </Link>
                    <button className="btn btn-outline-primary mx-2" onClick={() => { SavedRecipe(recipe.recipeId) }}>Save Recipe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="chinese" className="recipepage-card mb-5">
          <h3 className="text-center mb-3">🥡 Chinese</h3>
          <div className="row">
            {recipes.filter((recipe) => recipe.cuisine === "Chinese").map((recipe) => (
              <div className="col-md-4" key={recipe.recipeId}>
                <div className="card recipe-card1">
                  <img src={`http://localhost:5000${recipe.image}`} className="card-img-top" alt={recipe.title} style={{ height: "250px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <h6> By {recipe.Chef}</h6>
                    <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-primary">
                      View Recipe
                    </Link>
                    <button className="btn btn-outline-primary mx-2" onClick={() => { SavedRecipe(recipe.recipeId) }}>Save Recipe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="mexican" className="recipepage-card mb-5">
          <h3 className="text-center mb-3">🌮 Mexican</h3>
          <div className="row">
            {recipes.filter((recipe) => recipe.cuisine === "Mexican").map((recipe) => (
              <div className="col-md-4" key={recipe.recipeId}>
                <div className="card recipe-card1">
                  <img src={`http://localhost:5000${recipe.image}`} className="card-img-top" alt={recipe.title} style={{ height: "250px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <h6> By {recipe.Chef}</h6>
                    <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-primary">
                      View Recipe
                    </Link>
                    <button className="btn btn-outline-primary mx-2" onClick={() => { SavedRecipe(recipe.recipeId) }}>Save Recipe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="french" className="recipepage-card mb-5">
          <h3 className="text-center mb-3">🥖 French</h3>
          <div className="row">
            {recipes.filter((recipe) => recipe.cuisine === "French").map((recipe) => (
              <div className="col-md-4" key={recipe.recipeId}>
                <div className="card recipe-card1">
                  <img src={`http://localhost:5000${recipe.image}`} className="card-img-top" alt={recipe.title} style={{ height: "250px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <h6> By {recipe.Chef}</h6>
                    <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-primary">
                      View Recipe
                    </Link>
                    <button className="btn btn-outline-primary mx-2" onClick={() => { SavedRecipe(recipe.recipeId) }}>Save Recipe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="leftover" className="recipepage-card mb-5">
          <h3 className="text-center mb-3">♻️ Leftover Recipes</h3>
          <div className="row">
            {recipes.filter((recipe) => recipe.category === "Leftover Food").map((recipe) => (
              <div className="col-md-4" key={recipe.recipeId}>
                <div className="card recipe-card1">
                  <img src={`http://localhost:5000${recipe.image}`} className="card-img-top" alt={recipe.title} style={{ height: "250px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <h6> By {recipe.Chef}</h6>
                    <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-primary">
                      View Recipe
                    </Link>
                    <button className="btn btn-outline-primary mx-2" onClick={() => { SavedRecipe(recipe.recipeId) }}>Save Recipe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> </div>}

      </main>
    </>
  )
}

export default RecipeCard

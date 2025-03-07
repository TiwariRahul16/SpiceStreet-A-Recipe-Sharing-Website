import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Dummy Data for Categories and Recipes
const categories = [
  { name: "Indian", image: "https://images.unsplash.com/photo-1553621042-f6e147245754", link: "indian" },
  { name: "Italian", image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904", link: "italian" },
  { name: "Chinese", image: "https://images.unsplash.com/photo-1571984195307-83336fdbcd7b", link: "chinese" }
];

const recipes = [
  { name: "Hyderabadi Biryani", image: "https://images.unsplash.com/photo-1553621042-f6e147245754", description: "Aromatic rice dish with flavorful spices.", link: "biryani" },
  { name: "Pizza Margherita", image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904", description: "Classic Italian pizza with fresh tomatoes and basil.", link: "pizza" },
  { name: "Kung Pao Chicken", image: "https://images.unsplash.com/photo-1571984195307-83336fdbcd7b", description: "A spicy, stir-fried Chinese dish with peanuts.", link: "kungpao" }
];
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center text-white">
          <h1 className="display-3">Discover Delicious Recipes</h1>
          <p className="lead">Cook like a pro with our curated recipes.</p>
          <Link to="/recipe" className="btn btn-warning btn-lg mt-3">Explore Recipes</Link>
        </div>
      </section>

      {/* Food Categories */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Popular Food Categories</h2>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-4 text-center" key={index}>
              <div className="category-card">
                <img src={category.image} alt={category.name} className="img-fluid rounded"/>
                <h4 className="mt-3">{category.name}</h4>
                {/* <Link to={`/category/${category.link}`} className="btn btn-outline-danger mt-2">View More</Link> */}
                <Link to={`/recipe`} className="btn btn-outline-danger mt-2">View More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="featured-recipes bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Recipes</h2>
          <div className="row">
            {recipes.map((recipe, index) => (
              <div className="col-md-4" key={index}>
                <div className="card recipe-card">
                  <img src={recipe.image} className="card-img-top" alt={recipe.name} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                    <p className="card-text">{recipe.description}</p>
                    {/* <Link to={`/recipe/${recipe.link}`} className="btn btn-outline-primary">View Recipe</Link> */}
                    <Link to={`/recipe`} className="btn btn-outline-primary">View Recipe</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Features Section */}
            <section className="features-section py-5 bg-light">
        <div className="container text-center">
          <h2>Why Choose Us?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <i className="bi bi-book-half icon-feature"></i>
              <h4>Curated Recipes</h4>
              <p>Hand-picked, tested, and delicious recipes from expert chefs.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-people icon-feature"></i>
              <h4>Community Driven</h4>
              <p>Join a passionate community of home cooks and food lovers.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-lightning icon-feature"></i>
              <h4>Easy & Fast</h4>
              <p>Simple step-by-step guides for cooking like a pro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-5 ">
        <div className="container text-center">
          <h2 className="mb-4">What People Say</h2>
          <div className="testimonial">
            <p className="lead">"The best food website! So many amazing recipes!"</p>
            <h5>- Rahul Sharma</h5>
          </div>
          <div className="testimonial">
            <p className="lead">"I love trying new dishes, and this site makes it easy!"</p>
            <h5>- Priya Verma</h5>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta-section text-center py-5">
        <h2>Join Our Food Community</h2>
        <Link to="/register" className="btn btn-success btn-lg mt-3">Sign Up Now</Link>
      </section>
    </div>
  );
};

export default Home;

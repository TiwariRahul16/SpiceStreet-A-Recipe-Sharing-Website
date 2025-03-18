import React,{ useEffect, useState }  from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetail = () => {
  const { recipeId } = useParams(); // Get the dynamic ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/recipe/${recipeId}`);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) return <p>Loading recipe...</p>;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="container mt-5">
      {/* Title with Animation */}
      <motion.h2  className="text-center mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} >
        {recipe.title} 🍛
      </motion.h2>

      {/* Recipe Details Section */}
      <div className="row align-items-center">
        {/* Left: Food Image with Hover Effect */}
        <div className="col-md-6">
          <motion.img
            src={`http://localhost:5000${recipe.image}`}
            alt={recipe.title}
            className="img-fluid rounded shadow"
            style={{ width: "100%", height: "auto", borderRadius: "15px" }}
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Right: Chef Details with Fade-in Animation */}
        <motion.div 
          className="col-md-6 text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Chef Rahul Tiwari" className="rounded-circle mb-3 shadow" style={{ width: "150px", height: "150px", objectFit: "cover", border: "4px solid #ff5722" }} />
          <h4 className="fw-bold">{recipe.Chef}</h4>
          <p className="text-muted">Professional Chef</p>
          <motion.p className="mt-3 fw-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            {/* ⏱️ <strong>Time:</strong> 1 hour &nbsp; | &nbsp; 🍽️ <strong>Servings:</strong> 4 people &nbsp; | &nbsp; 🔥 <strong>Difficulty:</strong> Medium */}
            <div className="info-box mt-4">
            <p><strong>⏱️ Prep Time:</strong> {recipe.time} min</p>
            <p><strong>🍽️ Servings:</strong> {recipe.serving} people</p>
            <p><strong>🔥 Difficulty:</strong> Medium</p>
          </div>
          </motion.p>
        </motion.div>
      </div>

      {/* Ingredients Section */}
      <motion.div 
        className="mt-5 p-4 rounded shadow-lg mt-5 p-4 ingredients-box"
        style={{ background: "#f9f9f9" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h4 className="mb-3 ">📝 Ingredients</h4>
        <ul className="list-group">
        {recipe.ingredients.map((item,index)=>(
        <motion.li key={index} className="list-group-item" whileHover={{ scale: 1.04 }}> {item}</motion.li>
        ))}
          {/* <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>500g Chicken</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>2 cups Basmati Rice</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>2 Onions (sliced)</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1 cup Yogurt</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>2 Tomatoes (chopped)</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1 tbsp Ginger-Garlic Paste</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1 tsp Turmeric</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1 tsp Red Chili Powder</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1 tsp Garam Masala</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1/2 cup Coriander & Mint Leaves</motion.li> */}
        </ul>
      </motion.div>

      {/* Instructions Section */}
      <motion.div 
        className="mt-4 p-4 rounded shadow-lg p-4 steps-box"
        style={{ background: "#f9f9f9" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h4>📌 Instructions</h4>
        <ol className="list-group list-group-numbered">
          {recipe.instructions.split(",").map((step,index)=>(
            <motion.li key={index} className="list-group-item" whileHover={{ scale: 1.04 }}>{step.trim()}.</motion.li>
          ))}
          {/* <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Wash and soak basmati rice for 30 minutes.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Marinate chicken with yogurt, spices, and let it rest for an hour.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Fry onions until golden brown and set aside.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Cook marinated chicken until tender.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Boil rice with whole spices until 70% cooked.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Layer chicken, fried onions, and rice, then seal and cook on low flame for 20 minutes.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Serve hot with raita and salad.</motion.li> */}
        </ol>
      </motion.div>

      {/* Back to Recipes Button */}
      <motion.div 
        className="text-center mt-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a href="/" className="btn btn-outline-primary px-4 py-2 fw-bold">⬅ Back to Recipes</a>
      </motion.div>
    </div>
  );
};

export default RecipeDetail;

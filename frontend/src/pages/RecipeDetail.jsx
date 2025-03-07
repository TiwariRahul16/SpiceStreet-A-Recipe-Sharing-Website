import React from "react";
import { motion } from "framer-motion";

const RecipeDetail = () => {
  return (
    <div className="container mt-5">
      {/* Title with Animation */}
      <motion.h2 
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hyderabadi Biryani 🍛
      </motion.h2>

      {/* Recipe Details Section */}
      <div className="row align-items-center">
        {/* Left: Food Image with Hover Effect */}
        <div className="col-md-6">
          <motion.img
            src="https://images.unsplash.com/photo-1553621042-f6e147245754"
            alt="Hyderabadi Biryani"
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
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Chef Rahul Tiwari"
            className="rounded-circle mb-3 shadow"
            style={{ width: "150px", height: "150px", objectFit: "cover", border: "4px solid #ff5722" }}
          />
          <h4 className="fw-bold">Rahul Tiwari</h4>
          <p className="text-muted">Professional Chef</p>
          <motion.p className="mt-3 fw-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            {/* ⏱️ <strong>Time:</strong> 1 hour &nbsp; | &nbsp; 🍽️ <strong>Servings:</strong> 4 people &nbsp; | &nbsp; 🔥 <strong>Difficulty:</strong> Medium */}
            <div className="info-box mt-4">
            <p><strong>⏱️ Prep Time:</strong> 1 hour</p>
            <p><strong>🍽️ Servings:</strong> 4 people</p>
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
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>2 cups Basmati Rice</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>500g Chicken</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>2 Onions (sliced)</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1 cup Yogurt</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>2 Tomatoes (chopped)</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1 tbsp Ginger-Garlic Paste</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1 tsp Turmeric</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1 tsp Red Chili Powder</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1 tsp Garam Masala</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>1/2 cup Coriander & Mint Leaves</motion.li>
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
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Wash and soak basmati rice for 30 minutes.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Marinate chicken with yogurt, spices, and let it rest for an hour.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Fry onions until golden brown and set aside.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Cook marinated chicken until tender.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Boil rice with whole spices until 70% cooked.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Layer chicken, fried onions, and rice, then seal and cook on low flame for 20 minutes.</motion.li>
          <motion.li className="list-group-item" whileHover={{ scale: 1.04 }}>Serve hot with raita and salad.</motion.li>
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





// // // import React from "react";

// // // const RecipeDetail = () => {
// // //   return (
// //     <div className="container mt-5">
// //       {/* Recipe Header */}
// //       <h2 className="text-center mb-4 fw-bold">🍛 Hyderabadi Biryani</h2>

// //       <div className="row g-5 align-items-center">
// //         {/* Left: Food Image */}
// //         <div className="col-md-6">
// //           <div className="image-container">
// //             <img
// //               src="https://images.unsplash.com/photo-1553621042-f6e147245754"
// //               alt="Hyderabadi Biryani"
// //               className="food-img"
// //             />
// //           </div>
// //         </div>

// //         {/* Right: Recipe Details */}
// //         <div className="col-md-6">
// //           <div className="chef-info text-center">
// //             <img
// //               src="https://randomuser.me/api/portraits/men/32.jpg"
// //               alt="Chef Rahul Tiwari"
// //               className="chef-img"
// //             />
// //             <h4 className="fw-bold mt-3">Rahul Tiwari</h4>
// //             <p className="text-muted">Professional Chef</p>
// //           </div>

// //           {/* Time & Servings */}
// //           <div className="info-box mt-4">
// //             <p><strong>⏱️ Prep Time:</strong> 1 hour</p>
// //             <p><strong>🍽️ Servings:</strong> 4 people</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Ingredients */}
// //       <div className="mt-5 p-4 ingredients-box">
// //         <h4>📝 Ingredients</h4>
// //         <ul className="list-unstyled">
// //           <li>✔ 2 cups Basmati Rice</li>
// //           <li>✔ 500g Chicken</li>
// //           <li>✔ 2 Onions (sliced)</li>
// //           <li>✔ 1 cup Yogurt</li>
// //           <li>✔ 2 Tomatoes (chopped)</li>
// //           <li>✔ 1 tbsp Ginger-Garlic Paste</li>
// //           <li>✔ 1 tsp Turmeric</li>
// //           <li>✔ 1 tsp Red Chili Powder</li>
// //           <li>✔ 1 tsp Garam Masala</li>
// //           <li>✔ 1/2 cup Coriander & Mint Leaves</li>
// //         </ul>
// //       </div>

// //       {/* Instructions */}
// //       <div className="mt-4 p-4 steps-box">
// //         <h4>📌 Instructions</h4>
// //         <ol>
// //           <li>Wash and soak basmati rice for 30 minutes.</li>
// //           <li>Marinate chicken with yogurt, spices, and let it rest for an hour.</li>
// //           <li>Fry onions until golden brown and set aside.</li>
// //           <li>Cook marinated chicken until tender.</li>
// //           <li>Boil rice with whole spices until 70% cooked.</li>
// //           <li>Layer chicken, fried onions, and rice, then seal and cook on low flame for 20 minutes.</li>
// //           <li>Serve hot with raita and salad.</li>
// //         </ol>
// //       </div>

// //       {/* Back Button */}
// //       <div className="text-center mt-5">
// //         <a href="/" className="btn btn-outline-dark px-4 py-2 fw-bold">⬅ Back to Recipes</a>
// //       </div>
// //     </div>
// // //   );
// // // };

// // // export default RecipeDetail;




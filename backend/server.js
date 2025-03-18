const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const Recipe = require("./model/Recipe");
const User = require('./model/User')
const jwt = require('jsonwebtoken');
const Savedrecipe = require('./model/Savedrecipe') 



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use("/uploads", express.static("uploads")); // Serve uploaded images

//server creation 
// const app = express()
const port = 5000;
app.get('/',(req,res)=>{
    res.send('hello world')
})


//Database connection
mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        console.log("DB is connected successfuly"); 
    }
).catch(
    (err)=>{
        console.log("Database connection Error",err);  
    }
)

//registering a user
// app.use(express.json());

// app.post('/register', async(req,res)=>{
//     const {username,email,password} = req.body;
//     try {
//         const Hashedpassword = await bcryptjs.hash(password,10)
//         const user = new User({username,email,password:Hashedpassword});
//         await user.save();
//         res.json({message:"User registered"})
//         console.log("User registered successfully");
//     }catch (error) {
//         console.log('Error while registration',error);
//     }
// })

// //Loggging a user
// app.post('/login',async(req,res)=>{
//     const {email,password} = req.body
//     try {
//         const user = await User.findOne({email});
//         if (!user || !(await bcryptjs.compare(password,user.password))) {
//             console.log("invalid credentials");
//             return res.status(400).json({message:'invalid credentails'});
    
//         } else {
//             console.log("logging successfully");
//             return res.json({message:'Logging successfully',username:user.username})
//         }
//     } catch (error) {
//         console.log('Error in logging a user',error);
//     }
// })



// const SECRET_KEY = "your_secret_key"; // Change this to a secure environment variable

// **User Registration**
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    res.json({ message: "User registered successfully" });
    console.log("User registered successfully");
  } catch (error) {
    console.log("Error while registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// **User Login**
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    // const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
    //   expiresIn: "1h", // Token expires in 1 hour
    // });
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

    res.json({ message: "Login successful", token, userID: user._id, username: user.username });
    console.log("User logged in successfully");
  } catch (error) {
    console.log("Error in logging in a user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Configure Multer for Image Upload
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
  });
  
  const upload = multer({ storage });
  
  // Route to Add a New Recipe
  app.post("/api/recipes", upload.single("image"), async (req, res) => {
    try {
      console.log("Received body:", req.body);
      console.log("Received file:", req.file);
  
      const { title,Chef, category, cuisine, time, serving, ingredients, instructions } = req.body;
  
      // Convert string numbers to actual numbers
      const parsedTime = parseInt(time, 10);
      const parsedServing = parseInt(serving, 10);
  
      // Ensure all required fields are present
      if (!title || !category || !cuisine || isNaN(parsedTime) || isNaN(parsedServing) || !instructions) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Convert ingredients to an array if it's a string
      const ingredientsArray = typeof ingredients === "string" ? ingredients.split(",").map(i => i.trim()) : [];
  
      // Get image path
      const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
  
      const newRecipe = new Recipe({
        recipeId: uuidv4(),
        title,
        Chef,
        category,
        cuisine,
        time: parsedTime,
        serving: parsedServing,
        ingredients: ingredientsArray,
        instructions,
        image: imagePath,
      });
  
      await newRecipe.save();
      res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
    } catch (error) {
      console.error("Error adding recipe:", error);
      res.status(500).json({ message: "Error adding recipe", error: error.message });
    }
  });
  
  // Route to Get All Recipes
  app.get("/api/recipes", async (req, res) => {
    try {
      const recipes = await Recipe.find({});
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ message: "Error fetching recipes", error: error.message });
    }
  });

  // route to get your all recipe
  app.get("/api/getrecipe/:userName", async (req, res) => {
    try {
        const { userName } = req.params;
        // console.log("Fetching recipes for user:", userName);
        const recipes = await Recipe.find({ Chef: userName });
        // console.log("Recipes fetched:", recipes); 
        res.status(200).json(recipes);  
    } catch (error) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ message: "Error fetching recipes", error: error.message });
    }
});

// get recipe by ID
app.get("/api/recipe/:recipeId", async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findOne({ recipeId });
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipe details", error: error.message });
  }
});

//Deleting a recipe
app.delete('/api/deleteRecipe/:recipeId',async(req,res)=>{
  try {
    const {recipeId} = req.params;
    console.log("recipeId",recipeId)
    const recipe = await Recipe.deleteOne({recipeId:recipeId})
    console.log("Recipe deleted successfully");
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.log("Error in deleting recipe",error);
    res.status(500).json({ message: "Error in deleting recipe", error: error.message });
  }
})

// edit recipe
// Get a single recipe by recipeId and Update a recipe by recipeId
app.put("/api/recipes/:recipeId", upload.single("image"), async (req, res) => {
  try {
    const { title, category, cuisine, time, serving, ingredients, instructions } = req.body;

    const updateData = { title, category, cuisine, time, serving, ingredients: JSON.parse(ingredients), instructions };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedRecipe = await Recipe.findOneAndUpdate({ recipeId: req.params.recipeId }, updateData, { new: true });

    if (!updatedRecipe) return res.status(404).json({ message: "Recipe not found" });

    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: "Error updating recipe", error });
  }
});
  
// Saving Recipe
app.post("/api/recipes/save", async (req, res) => {
  try {
      const getrecipe = req.body;
      console.log("getrecipe: ",getrecipe);
      const alreadysaved = await Savedrecipe.findOne({recipeId:getrecipe.recipeId});
      if(!alreadysaved){
      const newRecipe = new Savedrecipe(getrecipe);
      await newRecipe.save();
      res.status(201).json(newRecipe);}else{
      res.status(200).json({ message: "Recipe already saved" });
      }

  } catch (error) {
      res.status(500).json({ message: "Error saving recipe", error });
  }
});

  // Route to Get All Recipes
  app.get("/api/SavedRecipes", async (req, res) => {
    try {
      const recipes = await Savedrecipe.find({});
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ message: "Error fetching recipes", error: error.message });
    }
  });

  //Deleting a saved recipe
app.delete('/api/deleteRecipes/:recipeId',async(req,res)=>{
  try {
    const {recipeId} = req.params;
    console.log("recipeId",recipeId)
    const recipe = await Savedrecipe.deleteOne({recipeId:recipeId})
    console.log("Recipe deleted successfully");
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.log("Error in deleting recipe",error);
    res.status(500).json({ message: "Error in deleting recipe", error: error.message });
  }
})


  // server
  app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server is listning at http://localhost:${port}`);
} 
)
  



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const multer = require("multer");
// const path = require("path");
// const { v4: uuidv4 } = require("uuid");
// require("dotenv").config();
// const Recipe = require("./model/Recipe");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // Parse form data
// app.use("/uploads", express.static("uploads")); // Serve uploaded images

// // Database Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("DB connected successfully"))
//   .catch((err) => console.log("Database connection error", err));

// // Configure Multer for Image Upload
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
//   },
// });

// const upload = multer({ storage });

// // Route to Add a New Recipe
// app.post("/api/recipes", upload.single("image"), async (req, res) => {
//   try {
//     console.log("Received body:", req.body);
//     console.log("Received file:", req.file);

//     const { title, category, cuisine, time, serving, ingredients, instructions } = req.body;

//     // Convert string numbers to actual numbers
//     const parsedTime = parseInt(time, 10);
//     const parsedServing = parseInt(serving, 10);

//     // Ensure all required fields are present
//     if (!title || !category || !cuisine || isNaN(parsedTime) || isNaN(parsedServing) || !instructions) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Convert ingredients to an array if it's a string
//     const ingredientsArray = typeof ingredients === "string" ? ingredients.split(",").map(i => i.trim()) : [];

//     // Get image path
//     const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

//     const newRecipe = new Recipe({
//       recipeId: uuidv4(),
//       title,
//       category,
//       cuisine,
//       time: parsedTime,
//       serving: parsedServing,
//       ingredients: ingredientsArray,
//       instructions,
//       image: imagePath,
//     });

//     await newRecipe.save();
//     res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
//   } catch (error) {
//     console.error("Error adding recipe:", error);
//     res.status(500).json({ message: "Error adding recipe", error: error.message });
//   }
// });

// // Route to Get All Recipes
// app.get("/api/recipes", async (req, res) => {
//   try {
//     const recipes = await Recipe.find();
//     res.json(recipes);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching recipes", error: error.message });
//   }
// });

// const port = 5000;
// app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));

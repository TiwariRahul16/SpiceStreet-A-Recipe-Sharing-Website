import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Addrecipe from "./pages/Addrecipe";
import Savedrecipes from "./pages/Savedrecipes";
import Editrecipe from "./pages/Editrecipe";
import Recipe from "./pages/Recipe";
import RecipeDetail from "./pages/RecipeDetail";
import Yourrecipe from "./pages/Yourrecipe";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
    console.log("user",isLoggedIn)
  }, []);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={ <Home /> } />
        <Route path="/recipe" element={ <Recipe /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/addrecipe" element={ <Addrecipe /> } />
        <Route path="/savedrecipes" element={ <Savedrecipes /> } />
        <Route path="/editrecipe/:recipeId" element={<Editrecipe />} />
        <Route path="/yourrecipe" element={<Yourrecipe />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
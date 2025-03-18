const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  Chef: { type: String, required: true },
  category: { type: String, required: true },
  cuisine: { type: String, required: true },
  time: { type: Number, required: true },
  recipeId: { type: String, required: true },
  serving: { type: Number, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  image: { type: String }, // Store image URL or filename
  previewImage: {type:String},
});

const Savedrecipe = mongoose.model("Savedrecipe", recipeSchema);
module.exports = Savedrecipe;

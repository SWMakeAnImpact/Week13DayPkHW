// Importing the mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Define a Schema for Pokemon
// A schema represents the structure of a particular document within a collection in MongoDB
const PokemonSchema = new mongoose.Schema({
  // Define 'name' field which is of type String and is required
  name: { type: String, required: true },
  // Define 'img' field which is of type String and is required
  // This could represent an image URL or file path for the Pokemon
  img: { type: String, required: true },
});

// Create a model from the schema
// A model allows you to work with collections of the defined schema
const Pokemon = mongoose.model("Pokemon", PokemonSchema);
// 'Pokemon' is the name of the model which corresponds to the 'pokemons' collection in the database
// Mongoose automatically looks for the plural, lowercased version of your model name

// Export the Pokemon model
// This makes the Pokemon model available to other files in the project
// Now it can be imported and used to interact with the 'pokemons' collection in the database
module.exports = Pokemon;

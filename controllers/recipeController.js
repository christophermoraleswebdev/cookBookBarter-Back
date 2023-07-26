const { Recipe } = require('../models')

// CREATE
// Create a new recipe
const createRecipe = async (req, res) => {
      try {
            const recipe = new Recipe(req.body)
            const savedRecipe = await recipe.save()
            res.status(201).json(savedRecipe)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
 }

// READ
// Get all recipes
const getAllRecipes = async (req, res) => {
      try {
            const recipes = await Recipe.find()
                  .populate('author', 'username')
                  .populate('comments', 'user', 'username')
                  .populate('ingredients')
                  .populate('ratings')
            res.json(recipes)
      } catch (error) {
            res.status(500).json({ error: error.message })
      }
}

// Get a single recipe by ID
const getRecipeById = async (req, res) => {
      try {
            const recipe = await Recipe.findById(req.params.id)
            .populate('author', 'username')
            .populate('comments')
            .populate('ingredients')
            .populate('ratings')
            if (!recipe) {
                  return res.status(404).json({ error: 'Recipe not found' })
            }
            res.json(recipe)
      } catch (error) {
            res.status(500).json({ error: error.message })
      }
}

// UPDATE
// Update a recipe by ID
const updateRecipeById = async (req, res) => {
      try {
            const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
            new: true
            })
            if (!recipe) {
                  return res.status(404).json({ error: 'Recipe not found' })
            }
            res.json(recipe)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

// DELETE
// Delete a recipe by ID
const deleteRecipeById = async (req, res) => {
      try {
            const recipe = await Recipe.findByIdAndDelete(req.params.id)
            if (!recipe) {
                  return res.status(404).json({ error: 'Recipe not found' })
            }
            res.json({ message: 'Recipe deleted successfully' })
      } catch (error) {
            res.status(500).json({ error: error.message })
      }
}


module.exports = {
      createRecipe,
      getAllRecipes,
      getRecipeById,
      updateRecipeById,
      deleteRecipeById
}
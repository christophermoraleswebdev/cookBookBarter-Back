const { Recipe } = require('../models')
const { Ingredient } = require('../models')

// CREATE
// Create a new recipe
const createRecipe = async (req, res) => {
      try {
            const { ingredients, ...otherRecipeData } = req.body
    
            // If the request contains ingredients data, we create the ingredients first and obtain their _id
            const ingredientIds = []
            if (ingredients && ingredients.length > 0) {
                  for (const ingredientData of ingredients) {
                        const newIngredient = new Ingredient(ingredientData)
                        const savedIngredient = await newIngredient.save()
                        ingredientIds.push(savedIngredient._id)
                  }
            }
    
            // After creating the ingredients and obtaining their _id, we can add them to the recipe data
            const recipeData = {
            ...otherRecipeData,
            ingredients: ingredientIds,
            }
    
            // Create a new recipe instance
            const newRecipe = new Recipe(recipeData)
    
            // Save the recipe to the database
            const savedRecipe = await newRecipe.save()
    
             res.status(201).json(savedRecipe)
      } catch (error) {
            console.error('Error creating recipe:', error)
            res.status(500).json({ error: 'Failed to create recipe' })
      }
}

// READ
// Get all recipes
const getAllRecipes = async (req, res) => {
      try {
            const recipes = await Recipe.find()
                  .populate('author', 'username')
                  .populate({
                              path: 'comments',
                              populate: { path: 'user', select:'username' }
                        })
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
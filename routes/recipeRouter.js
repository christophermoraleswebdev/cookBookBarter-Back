const Router = require('express').Router()
const controller = require('../controllers/recipeController')

// Create Recipe
Router.post('/create', controller.createRecipe)

// Read Recipe
Router.get('/', controller.getAllRecipes)
Router.get('/:id', controller.getRecipeById)

// Update Recipe
Router.put('/:id', controller.updateRecipeById)

// Delete Recipe
Router.delete('/:id', controller.deleteRecipeById)


module.exports = Router
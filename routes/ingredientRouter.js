const Router = require('express').Router()
const controller = require('../controllers/ingredientController')

// Create Ingredient 
Router.post('/create', controller.createIngredient)

// Get All Ingredients
Router.get('/', controller.getAllIngredients)



module.exports = Router 
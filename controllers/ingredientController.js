const { Ingredient } = require('../models')

// CREATE
// Create an Ingredient
const createIngredient = async (req, res) => {
      try {
            const { name, quantity, unit } = req.body
      
            // Create a new ingredient instance
            const newIngredient = new Ingredient({
            name,
            quantity,
            unit
            })
    
            // Save the ingredient to the database
            const savedIngredient = await newIngredient.save()
      
            res.status(201).json(savedIngredient)
      } catch (error) {
            console.error('Error creating ingredient:', error)
            res.status(500).json({ error: 'Failed to create ingredient' })
      }
}

// READ
// Get All Ingredients
const getAllIngredients = async (req, res) => {
      try {
            const ingredients = await Ingredient.find()
      
            res.status(200).json(ingredients)
      } catch (error) {
            console.error('Error retrieving ingredients:', error)
            res.status(500).json({ error: 'Failed to retrieve ingredients' })
      }
}




module.exports = {
      createIngredient, 
      getAllIngredients, 

}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
      title: { 
            type: String, 
            required: true 
      },
      description: { 
            type: String 
      },
      ingredients: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Ingredient' 
      }],
      instructions: { 
            type: String 
      },
      preparationTime: { 
            type: Number 
      },
      cookingTime: { 
            type: Number 
      },
      difficultyLevel: { 
            type: String 
      },
      author: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
      },
      category: { 
            type: String 
      }, // Or an array of category names
      comments: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Comment' 
      }],
      ratings: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Rating' 
      }],
})

module.exports = recipeSchema
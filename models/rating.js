const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ratingSchema = new Schema({
      value: { 
            type: Number, 
            required: true 
      },
      user: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
      },
      recipe: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Recipe', 
            required: true 
      },
})

module.exports = ratingSchema


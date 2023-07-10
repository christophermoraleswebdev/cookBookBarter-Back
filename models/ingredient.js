const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ingredientSchema = new mongoose.Schema({
      name: { 
            type: String, 
            required: true 
      },
      quantity: { 
            type: Number 
      },
      unit: { 
            type: String 
      },
})

module.exports = ingredientSchema
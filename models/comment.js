const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentSchema = new Schema({
      text: { 
            type: String, 
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
      timestamp: { 
            type: Date, 
            default: Date.now 
      },
})

module.exports = commentSchema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
      username: { 
            type: String, 
            required: true, 
            unique: true 
      },
      email: { 
            type: String,
            unique: true, 
      },
      password: { 
            type: String, 
            required: true 
      },
      firstName: {
            type: String, 
      },
      lastName: {
            type: String, 
      },
      profilePicture: { 
            type: String 
      },
      favorites: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Recipe' 
      }],
})

module.exports = userSchema 
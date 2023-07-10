mongoose = require('mongoose')
const { default: mongoose } = require('mongoose')
const userSchema = require('./user')
const recipeSchema = require('./recipe')
const categorySchema = require('./category')
const commentSchema = require('./comment')
const ratingSchema = require('./rating')
const ingredientSchema = require('./ingredient')

const User = mongoose.model('User', userSchema)
const Recipe = mongoose.model('Recipe', recipeSchema)
const Category = mongoose.model('Category', categorySchema)
const Comment = mongoose.model('Comment', commentSchema)
const Rating = mongoose.model('Rating', ratingSchema)
const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = {
      User, 
      Recipe, 
      Category, 
      Comment,
      Rating, 
      Ingredient
}
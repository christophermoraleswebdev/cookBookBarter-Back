const Router = require('express').Router()

const userRouter = require('./userRouter')
const recipeRouter = require('./recipeRouter')
const ratingRouter = require('./ratingRouter')
const ingredientRouter = require('./ingredientRouter')


Router.use('/user', userRouter)
Router.use('/recipe', recipeRouter)
Router.use('/rating', ratingRouter)
Router.use('/ingredient', ingredientRouter)

module.exports = Router 
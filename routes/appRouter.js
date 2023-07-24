const Router = require('express').Router()

const userRouter = require('./userRouter')
const recipeRouter = require('./recipeRouter')
const ratingRouter = require('./ratingRouter')
const ingredientRouter = require('./ingredientRouter')
const commentRouter = require('./commentRouter')


Router.use('/user', userRouter)
Router.use('/recipe', recipeRouter)
Router.use('/rating', ratingRouter)
Router.use('/ingredient', ingredientRouter)
Router.use('/comment', commentRouter)

module.exports = Router  
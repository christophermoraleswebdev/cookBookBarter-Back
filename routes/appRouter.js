const Router = require('express').Router()

const userRouter = require('./userRouter')
const recipeRouter = require('./recipeRouter')
const ratingRouter = require('./ratingRouter')


Router.use('/user', userRouter)
Router.use('/recipe', recipeRouter)
Router.use('/rating', ratingRouter)

module.exports = Router 
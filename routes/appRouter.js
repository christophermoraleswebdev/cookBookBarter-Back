const Router = require('express').Router()

const userRouter = require('./userRouter')
const recipeRouter = require('./recipeRouter')


Router.use('/user', userRouter)
Router.use('/recipe', recipeRouter)

module.exports = Router 
const Router = require('express').Router()
const controller = require('../controllers/userController')

// Create User
Router.post('/create', controller.createUser)

// Get User
Router.get('/', controller.allUsers)
Router.get('/:id', controller.findUserById)

// Update User
Router.put('/:id', controller.updateUser)

// Delete User
Router.delete('/:id', controller.deleteUser)

Router.post('/login', controller.loginController)

Router.post('/logout/:id', controller.signOutController)

// Delete Favorite
Router.delete('/users/:userId/favorites/:favoriteId', controller.removeFavorite)


module.exports = Router 
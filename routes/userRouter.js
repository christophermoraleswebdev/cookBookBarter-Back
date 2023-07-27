const Router = require('express').Router()
const controller = require('../controllers/userController')

// Create User
Router.post('/create', controller.createUser)

// Get User
Router.get('/allUsers', controller.allUsers)
Router.get('/:id', controller.findUserById)

// Update User
Router.put('/:id', controller.updateUser)

// Delete User
Router.delete('/:id', controller.deleteUser)




module.exports = Router 
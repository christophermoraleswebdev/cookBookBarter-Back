const Router = require('express').Router()
const controller = require('../controllers/commentController')


// Create Comment
Router.post('/create', controller.createComment)

// Get Comment
Router.get('/', controller.getAllComments)
Router.get('/:id', controller.getCommentById)

// Update Comment
Router.put('/:id', controller.updateComment)

// Delete Comment
Router.delete('/:id', controller.deleteComment)


module.exports = Router
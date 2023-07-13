const Router = require('express').Router()
const controller = require('../controllers/ratingController')

// Create Rating
Router.post('/create', controller.createRating)

// Update Rating
Router.put('/:id', controller.updateRatingById)

// Get All Ratings
Router.get('/', controller.getAllRatings)
// Get Rating By ID
Router.get('/:id', controller.getRatingById)

// Delete Rating
Router.delete('/:id', controller.deleteRating)

module.exports = Router 
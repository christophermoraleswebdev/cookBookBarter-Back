const { Rating } = require('../models')
const mongoose = require('mongoose')

// CREATE
// Create New Rating
const createRating = async (req, res) => {
      try {
            const { value, user, recipe } = req.body
    
            // Convert user and recipe values to ObjectIDs
            const userId = new mongoose.Types.ObjectId(user)
            const recipeId = new mongoose.Types.ObjectId(recipe)
    
            // Create a new rating instance
            const newRating = new Rating({
            value,
            user: userId,
            recipe: recipeId
            })
    
             // Save the rating to the database
             const savedRating = await newRating.save()
    
            res.status(201).json(savedRating)
      } catch (error) {
            console.error('Error creating rating:', error)
            res.status(500).json({ error: 'Failed to create rating' })
      }
}

// READ
// Get All Ratings
const getAllRatings = async (req, res) => {
      try {
            const ratings = await Rating.find()
            .populate('user')
            .populate('recipe')
    
        res.status(200).json(ratings)
      } catch (error) {
            console.error('Error retrieving ratings:', error)
            res.status(500).json({ error: 'Failed to retrieve ratings' })
      }
}

// UPDATE
// Update Rating By ID
const updateRatingById = async (req, res) => {
      try {
            const { id } = req.params
            const { value } = req.body
      
            const rating = await Rating.findByIdAndUpdate(id, { value }, { new: true })
            if (!rating) {
            return res.status(404).json({ error: 'Rating not found' })
            }
    
            res.json(rating)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

// DELETE
// Delete Rating By ID
const deleteRating = async (req, res) => {
      try {
            const { id } = req.params
            console.log('Rating ID:', id)
    
            const deletedRating = await Rating.findByIdAndRemove(id)
            console.log('Deleted Rating:', deletedRating)
    
            if (!deletedRating) {
            return res.status(404).json({ message: 'Rating not found' })
            }
            res.status(200).json({ message: 'Rating deleted successfully' })
      } catch (error) {
            console.error('Error deleting rating:', error)
            res.status(500).json({ message: 'Internal server error' })
      }
}

module.exports = {
      createRating, 
      getAllRatings,
      updateRatingById,
      deleteRating,
}
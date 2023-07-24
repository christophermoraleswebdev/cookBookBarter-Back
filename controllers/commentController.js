const mongoose = require('mongoose')
const { Comment } = require('../models')

// CREATE
// Create a new comment
const createComment = async (req, res) => {
      try {
            const comment = new Comment(req.body)
            const savedComment = await comment.save()
            res.status(201).json(savedComment)
      } catch (err) {
            res.status(400).json({ error: err.message })
      }
}

// READ
// Get all comments
const getAllComments = async (req, res) => {
      try {
            const comments = await Comment.find()
            res.json(comments)
      } catch (err) {
            res.status(500).json({ error: err.message })
      }
}

// Get a single comment by ID
const getCommentById = async (req, res) => {
      try {
            const comment = await Comment.findById(req.params.id)
            if (!comment) {
                  return res.status(404).json({ message: 'Comment not found' })
            }
            res.json(comment)
      } catch (err) {
            res.status(500).json({ error: err.message })
      }
}
    

// UPDATE 
// Update a comment by id
const updateComment = async (req, res) => {
      try {
            const comment = await Comment.findById(req.params.id)
            if (!comment) {
                  return res.status(404).json({ message: 'Comment not found' })
            }
    
            comment.text = req.body.text || comment.text
            comment.timestamp = Date.now()
    
            await comment.save()
            res.json(comment)
      } catch (err) {
            res.status(400).json({ error: err.message })
      }
}

// DELETE 
// Delete comment by id 
const deleteComment = async (req, res) => {
      try {
            const comment = await Comment.findByIdAndDelete(req.params.id)
            if (!comment) {
                  return res.status(404).json({ message: 'Comment not found' })
            }
    
            res.json({ message: 'Comment deleted successfully' })
      } catch (err) {
            res.status(500).json({ error: err.message })
      }
}



module.exports = {
      createComment, 
      getAllComments, 
      getCommentById, 
      updateComment, 
      deleteComment,
}
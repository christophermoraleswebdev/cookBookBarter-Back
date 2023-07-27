const { User } = require('../models')

// CREATE
// Create a New User 
const createUser = async (req, res) => {
      try {
            const { username, email } = req.body

            const existingUser = await User.findOne({ $or: [{ username }, { email }] })

            if(existingUser) {
                  return res.status(400).json({ message: "Username or email already exists" })
            }

            const newUser = new User({ 
                  email, 
                  password, 
            })

            const savedUser = await newUser.save()
            res.status(201).json(savedUser)
      } catch (e) {
            console.log(e)
            res.status(500).send('User creation unsuccessful') 
      }
}
// READ
// Find All Users
const allUsers = async (req, res) => {
      try {
            const users = await User.find()
            if(!users) throw Error ('User not found')
            res.status(200).json(users)
      } catch (e) {
            console.log(e)
            res.status(500).send('User not found')
      }
}

// Find Users By ID
const findUserById = async (req, res) => {
      try {
            const { id } = req.params
            const user = await User.findById(id)
            .populate({
                  path: 'favorites',
                        populate: [{
                              path: 'ingredients'
                        }]
            })
            if(!user) throw Error ('User not found')
            res.status(200).json(user)
      } catch (e) {
            console.log(e)
            res.status(500).send('User not found')
      }
}

// UPDATE
// Update a User
const updateUser = async (req, res) => {
      try {
            const { firstName, lastName, email, profilePicture, username, password } = req.body
            const id = req.params.id
            console.log(id)
            const user = await User.findById(id)
            if (!user) {
                  console.log(id)
                  return res.status(404).json({ message: "User not found. "})
            }

            user.firstName = firstName || user.firstName
            user.lastName = lastName || user.lastName
            user.email = email || user.email
            user.profileicture = profilePicture || user.profilePicture
            user.username = username || user.username
            user.password = password || user.password
            
            const updatedUser = await user.save()
            res.status(200).json({ message: 'User updated successfully', user: updatedUser })

      } catch (e) {
            console.log(e)
            res.status(500).send('User updated unsuccessfully')
      }
}

// DELETE
// Delete a User 
const deleteUser = async (req, res) => {
      try {
            const { id } = req.params
            console.log('User ID:', id)

            const deletedUser = await User.findByIdAndRemove(id)
            console.log('Deleted User:', deletedUser)

            if (!deletedUser) {
                  return res.status(404).json({ message: 'User not found' })
            }
            res.status(200).json({ message: 'User deleted successfully' })
      } catch (e) {
            console.log('Error:', e)
            res.status(500).json({ message: 'Internal server error' })
      }
}

// Login 
const loginController = async (req, res) => {
      try {
            const { email, password } = req.body
      
            // Check if the user exists 
            const user = await User.findOne({ email })
      
            if (!user || user.password !== password) {
                  return res.status(401).json({ message: "Invalid email or password" })
            }
      
            // Update the user's signedIn status to true
            user.signedIn = true
            await user.save()
            
      
            res.status(200).json({ message: "Login successful" })
      } catch (err) {
            console.error(err)
            res.status(500).json({ message: "Internal server error" })
      }
}

// Sign-out 
const signOutController = async (req, res) => {
      console.log('working')
      try {
    
            const { email } = req.body
      
            const user = await User.findOneAndUpdate({ email: email }, { signedIn: false })
      
            if (!user) {
            return res.status(404).json({ message: 'User not found' })
            }
      
            res.sendStatus(200) 
      } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Internal server error' })
      }
}


module.exports = {
      allUsers, 
      findUserById,  
      createUser, 
      updateUser, 
      deleteUser, 
      loginController, 
      signOutController
}
const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
      
      const user = [
        {
          username: 'sampleuser22',
          email: 'sampleuser22@example.com',
          password: 'password1234',
          firstName: 'Christopher',
          lastName: 'Morales',
          profilePicture: 'https://example.com/profile-picture.jpg',
          favorites: [],
          __v: 0
        },
        {
          username: 'sampleuser2',
          email: 'sampleuser2@example.com',
          password: 'password123',
          firstName: 'John',
          lastName: 'Doe',
          profilePicture: 'https://example.com/profile-picture.jpg',
          favorites: [],
          __v: 0
        },
        {
          username: 'sampleuser3',
          email: 'sampleuser3@example.com',
          password: 'password123',
          firstName: 'Jane',
          lastName: 'Smith',
          profilePicture: 'https://example.com/profile-picture.jpg',
          favorites: [],
          __v: 0
        },
        {
          username: 'sampleuser4',
          email: 'sampleuser4@example.com',
          password: 'password123',
          firstName: 'Carlos',
          lastName: 'Castaneda',
          profilePicture: 'https://example.com/profile-picture.jpg',
          favorites: [],
          __v: 0
        },
        {
          username: 'sampleuser6',
          email: 'sampleuser6@example.com',
          password: 'password123',
          firstName: 'Miles',
          lastName: 'Morales',
          profilePicture: 'https://example.com/profile-picture.jpg',
          favorites: [],
          __v: 0
        },
        {
          username: 'sampleuser7',
          email: 'sampleuser7@example.com',
          password: 'password123',
          firstName: 'Cruz',
          lastName: 'Morales',
          profilePicture: 'https://example.com/profile-picture.jpg',
          favorites: [],
          __v: 0
        },
        {
          username: 'sampleuser8',
          email: 'sampleuser8@example.com',
          password: 'password123',
          firstName: 'Terry',
          lastName: 'Morales',
          profilePicture: 'https://example.com/profile-picture.jpg',
          favorites: [],
          __v: 0
        },
        {
          username: 'sampleuser9',
          email: 'sampleuser9@example.com',
          password: 'password123',
          firstName: 'Michael',
          lastName: 'Morales',
          profilePicture: 'https://example.com/profile-picture.jpg',
          favorites: [],
          __v: 0
        }
      ]

      await User.insertMany(user)
      console.log('Users created successfully!')

}

const run = async () => {
      await main()
      db.close()
}

run()
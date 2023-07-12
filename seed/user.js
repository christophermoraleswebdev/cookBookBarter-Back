const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

      const user = [
            {
              username: 'john_doe',
              email: 'john.doe@example.com',
              password: 'password123',
              profilePicture: 'https://example.com/profiles/john_doe.jpg',
              favorites: []
            },
            {
              username: 'jane_smith',
              email: 'jane.smith@example.com',
              password: 'securepass456',
              profilePicture: 'https://example.com/profiles/jane_smith.jpg',
              favorites: []
            },
            {
              username: 'user123',
              email: 'user123@example.com',
              password: 'secret789',
              profilePicture: 'https://example.com/profiles/user123.jpg',
              favorites: []
            },
            {
              username: 'test_user',
              email: 'test.user@example.com',
              password: 'testpass',
              profilePicture: 'https://example.com/profiles/test_user.jpg',
              favorites: []
            },
            {
              username: 'webmaster',
              email: 'webmaster@example.com',
              password: 'securepassword321',
              profilePicture: 'https://example.com/profiles/webmaster.jpg',
              favorites: []
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
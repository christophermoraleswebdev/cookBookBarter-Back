const db = require('../db')
const { Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

      const comment = [
            {
              text: "This recipe is delicious!",
              user: '',
              recipe: ''
            },
            {
              text: "I made this for dinner and my family loved it!",
              user: '',
              recipe: ''
            },
            {
              text: "The instructions were easy to follow. Thanks for sharing!",
              user: '',
              recipe: ''
            },
            {
              text: "I added some extra spices and it turned out amazing!",
              user: '',
              recipe: ''
            },
            {
              text: "I had to make a double batch because it was so popular at the party!",
              user: '',
              recipe: ''
            }
      ]

      await Comment.insertMany(comment)
      console.log('Comments created successfully!')

}

const run = async () => {
      await main()
      db.close()
}

run()
const db = require('../db')
const { Rating } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

      const rating = [
            {
              value: 4,
              user: '',
              recipe: ''
            },
            {
              value: 5,
              user: '',
              recipe: ''
            },
            {
              value: 3,
              user: '',
              recipe: ''
            },
            {
              value: 2,
              user: '',
              recipe: ''
            },
            {
              value: 1,
              user: '',
              recipe: ''
            }
      ]

      await Rating.insertMany(rating)
      console.log('Ratings created successfully!')

}

const run = async () => {
      await main()
      db.close()
}

run()
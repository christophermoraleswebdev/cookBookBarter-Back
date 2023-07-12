const db = require('../db')
const { Category } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

      const category = [
            {

            },
      ]

      await Category.insertMany(category)
      console.log('Categories created successfully!')

}

const run = async () => {
      await main()
      db.close()
}

run()
const db = require('../db')
const { Ingredient } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

      const ingredient = [
            {
              name: "Tomatoes",
              quantity: 2,
              unit: "pieces"
            },
            {
              name: "Chicken Breast",
              quantity: 1,
              unit: "piece"
            },
            {
              name: "Basil Leaves",
              quantity: 1/4,
              unit: "cup"
            },
            {
              name: "All-Purpose Flour",
              quantity: 2,
              unit: "cups"
            },
            {
              name: "Olive Oil",
              quantity: 2,
              unit: "tablespoons"
            }
      ]

      await Ingredient.insertMany(ingredient)
      console.log('Ingredients created successfully!')

}

const run = async () => {
      await main()
      db.close()
}

run()
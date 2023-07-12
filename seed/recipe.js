const db = require('../db')
const { Recipe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

      const recipe = [
            {
                  title: "Spaghetti Bolognese",
                  description: "Classic Italian pasta dish with a rich meat sauce.",
                  ingredients: [], 
                  instructions: "1. Cook spaghetti according to package instructions. 2. Heat olive oil in a pan and sauté onions and garlic. 3. Add ground beef and cook until browned. 4. Stir in tomato sauce, diced tomatoes, and seasonings. Simmer for 20 minutes. 5. Serve the sauce over cooked spaghetti.",
                  preparationTime: 15,
                  cookingTime: 30,
                  difficultyLevel: 3,
                  author: '',
                  category: "Pasta",
                  comments: [], 
                  ratings: []
            },
            {
                  title: "Chicken Stir-Fry",
                  description: "Quick and healthy stir-fry dish with chicken and vegetables.",
                  ingredients: [], 
                  instructions: "1. Cut chicken into bite-sized pieces. 2. Heat oil in a wok and stir-fry chicken until cooked. 3. Add vegetables (such as bell peppers, broccoli, and carrots) and cook until tender-crisp. 4. In a separate bowl, mix soy sauce, ginger, garlic, and cornstarch. 5. Pour the sauce over the chicken and vegetables, stirring until thickened. 6. Serve with rice.",
                  preparationTime: 10,
                  cookingTime: 15,
                  difficultyLevel: 2,
                  author: '',
                  category: "Asian",
                  comments: [], 
                  ratings: [] 
            },
            {
                  title: "Caprese Salad",
                  description: "Refreshing salad with tomatoes, mozzarella, and basil.",
                  ingredients: [], 
                  instructions: "1. Slice tomatoes and mozzarella into rounds. 2. Arrange them on a plate, alternating tomato and mozzarella slices. 3. Sprinkle with fresh basil leaves. 4. Drizzle with olive oil and balsamic vinegar. 5. Season with salt and pepper. 6. Serve immediately.",
                  preparationTime: 5,
                  cookingTime: 0,
                  difficultyLevel: 1,
                  author: '',
                  category: "Salads",
                  comments: [], 
                  ratings: [] 
            },
            {
                  title: "Chocolate Chip Cookies",
                  description: "Classic homemade cookies with chocolate chips.",
                  ingredients: [], 
                  instructions: "1. Preheat oven to 350°F (175°C). 2. In a bowl, cream together butter, white sugar, and brown sugar. 3. Beat in eggs, one at a time, then stir in vanilla. 4. Dissolve baking soda in hot water and add to the batter. 5. Mix in flour and chocolate chips. 6. Drop spoonfuls of dough onto baking sheets. 7. Bake for 10-12 minutes or until golden brown. 8. Allow to cool on the baking sheet for a few minutes before transferring to a wire rack.",
                  preparationTime: 20,
                  cookingTime: 10,
                  difficultyLevel: 2,
                  author: '',
                  category: "Desserts",
                  comments: [], 
                  ratings: [] 
            },
            {
                  title: "Mediterranean Quinoa Salad",
                  description: "Healthy and flavorful salad with quinoa, vegetables, and feta cheese.",
                  ingredients: [], 
                  instructions: "1. Cook quinoa according to package instructions and let it cool. 2. In a large bowl, combine quinoa, diced cucumber, cherry tomatoes, red onion, olives, and crumbled feta cheese. 3. In a small bowl, whisk together olive oil, lemon juice, garlic, salt, and pepper to make the dressing. 4. Pour the dressing over the salad and toss to combine. 5. Serve chilled or at room temperature.",
                  preparationTime: 15,
                  cookingTime: 20,
                  difficultyLevel: 1,
                  author: '',
                  category: "Salads",
                  comments: [], 
                  ratings: [] 
            }
      ]

      await Recipe.insertMany(recipe)
      console.log('Recipes created successfully!')

}

const run = async () => {
      await main()
      db.close()
}

run()
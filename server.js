require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db/index')
const AppRouter = require('./routes/appRouter')
const cors = require('cors')
const app = express()
console.log(process.env.DATABASE_URL)


app.use(cors())
app.use(express.json())

app.use('/api', AppRouter)

app.get('/', (req, res) => {
      res.send('This is root!')
})
    
app.listen(PORT, () => {
      console.log(`Express servers on port: ${PORT}`)})
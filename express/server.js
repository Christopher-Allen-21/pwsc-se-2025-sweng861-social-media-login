const express = require('express')
const { connectDB } = require('./db')

const app = express()
const PORT = process.envPORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World from Express and MongoDb')
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
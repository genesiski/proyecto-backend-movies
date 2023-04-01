const express = require('express')
const cors = require('cors')

const movieRouter = require('./movies/movies.router')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK'})
})

app.use('/', movieRouter)


app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})

module.exports = app

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
require('dotenv').config()

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//router
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connect to db')
        console.log('listening on port 3000')
    })
})
.catch((err) => {
    console.log(err)
})


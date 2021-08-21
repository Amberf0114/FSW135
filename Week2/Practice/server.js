//Easily readable
//Easily indexed

//DO NOT use dashes between route path words

// Folder of different routes with seperate files for each route

//dont need new instance of express in server file
//instead declare a new instance of our router class

const express = require('express')
const app= express()
const morgan = require('morgan')
// const { v4 : uuidv4 } = require('uuid')
const mongoose = require('mongoose')
const animalRouter = require('./AnimalRouter.js')



const PORT = 3000

//middleware
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/animalsdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

//routes
app.use('/animals', animalRouter)

//server startup logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})
const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const inventoryRouter = require('./routes/inventoryRouter.js')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/inventorydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

PORT = 3000

app.use('/inventory', inventoryRouter)


app.listen(PORT, () => {
    console.log(`App started on ${PORT}`)
})
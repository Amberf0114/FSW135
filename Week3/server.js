const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')

const authRouter = require('./routes/authRouter.js')
const commentRouter = require('./routes/commentRouter.js')
const issueRouter = require('./routes/issueRouter.js')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/authdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)

var PORT = 3001

app.use('/auth', authRouter)
app.use('/comment', commentRouter)
app.use('/issue', issueRouter)

app.listen(PORT, () => {
    console.log(`App started on ${PORT}`)
})
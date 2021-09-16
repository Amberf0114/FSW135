const express = require('express')
const morgan = require('morgan')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')



const authRouter = require('./routes/authRouter.js')
const commentRouter = require('./routes/commentRouter.js')
const issueRouter = require('./routes/issueRouter')

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

app.use('/secure', expressJwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/auth', authRouter)
app.use('/secure/comment', commentRouter)
app.use('/secure/issue', issueRouter)


app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError") {
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})
app.listen(PORT, () => {
    console.log(`App started on ${PORT}`)
})
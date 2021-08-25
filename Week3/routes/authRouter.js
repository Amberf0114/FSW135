const express = require('express')
const authRouter = express.Router()
const comment = require('..models/comment.js')
const issue = require('..models/issue.js')
const user = require('..models/user.js')

authRouter

    .get('/',(req, res, next) => {
        comment.find((err, comments) => {
            if(err){
                res.status(500)
                return console.log(err)
            }
            return res.status(200).json(comments)
        })
    })

    module.exports = authRouter
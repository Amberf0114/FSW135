const express = require('express')
const authRouter = express.Router()
const comment = require('../models/comment.js')
const auth = require('../models/user.js')
const jwt = require('jsonwebtoken')

authRouter
    //Get All Issues
    // .get('/',(req, res, next) => {
    //     auth.find((err, auth) => {
    //         if(err){
    //             res.status(500)
    //             return console.log(err)
    //         }
    //         return res.status(200).send(auth)
    //     })
    // })

    // / Sign
    .post("/signup", (req, res, next) => {
        auth.findOne({ username : req.body.username.toLowerCase() }, (err, user) => {
            if (err){
                res.status(500)
                return next(err)
            }
            if(user){
                res.status(403)
                return next (new Error('Username is Taken'))
            }
            const newAuth = new auth(req.body)
            newAuth.save((err, savedAuth) => {
                if (err){
                    res.status(500)
                    return console.log(err)
                }
                const token = jwt.sign(savedAuth.toObject(), process.env.SECRET)
                return res.status(201).send({token, user: savedUser})
            })
        })

    })

    //Login
    authRouter.post("/login", (req,res, next) => {
        auth.findOne({username: req.body.username.toLowerCase() }, (err,user) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!auth || req.body.passcode !== auth.passcode) {
                res.status(403)
                return next(new Error('Invalid Credentials'))
            }
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(200).send({token, user})
        })
    })


    // authRouter
    
    //     //Get One Issue from the main page
    //     .get('/:authId', (req, res, next) => {
    //         auth.findOne({_id: req.params.authId}, (err, foundAuth) => {
    //             if (err) {
    //                 res.status(500)
    //                 return console.log(err)
    //             }
    //             return res.status(200).send(foundAuth)
    //         })
    //     })

    //     //Edit an Issue
    //     .put('/:authId', (req,res, next) => {
    //         auth.findOneAndUpdate(
    //             {_id: req.params.authId},
    //             req.body,
    //             {new: true},
    //             (err, updatedAuth) => {
    //                 if (err) {
    //                     res.status(500)
    //                     return console.log(err)
    //                 }
    //                 return res.status(200).json(updatedAuth)
    //             }
    //         )
    //     })
        
    //     //Post a Comment on a specified Auth ----needs a separate ID
    //     .post("/:authId", (req, res, next) => {
    //         const newComment = new comment(req.body)
    //         newComment.save((err, savedComment) => {
    //             if (err){
    //                 res.status(500)
    //                 return console.log(err)
    //             }
    //             return res.status(201).send(savedComment)
    //         })
    //     })


    //     //Delete an auth
    //     .delete('/:authId', (req, res, next) => {
    //         auth.findOneAndDelete({_id: req.params.authId }, (err, deletedAuth) => {
    //             if(err) {
    //                 res.status(500)
    //                 return console.log(err)
    //             }
    //             return res.status(200).json({
    //                 response: `Successfully deleted ${deletedAuth.title} from the DB`
    //             })
    //         })
    //     })



    module.exports = authRouter
const express = require('express')
const commentRouter = express.Router()
const comment = require('../models/comment.js')
const issueRouter = require('./routes/issueRouter.js')


commentRouter

    .get('/',(req, res, next) => {
        comment.find((err, comment) => {
            if(err){
                res.status(500)
                return console.log(err)
            }
            return res.status(200).send(comment)
        })
    })

   commentRouter
    
        //Get One comment
        .get('/:commentId', (req, res, next) => {
            comment.findOne({_id: req.params.commentId}, (err, foundComment) => {
                if (err) {
                    res.status(500)
                    return console.log(err)
                }
                return res.status(200).send(foundComment)
            })
        })

        //Edit a comment
        .put('/:commentId', (req,res, next) => {
            comment.findOneAndUpdate(
                {_id: req.params.commentId},
                req.body,
                {new: true},
                (err, updatedComment) => {
                    if (err) {
                        res.status(500)
                        return console.log(err)
                    }
                    return res.status(200).json(updatedComment)
                }
            )
        })

        //Post a Comment on a specified Issue ----needs a separate ID
        

        //Delete a comment
        .delete('/:commentId', (req, res, next) => {
            comment.findOneAndDelete({_id: req.params.commentId }, (err, deletedComment) => {
                if(err) {
                    res.status(500)
                    return console.log(err)
                }
                return res.status(200).json({
                    response: `Successfully deleted ${deletedComment.title} from the DB`
                })
            })
        })

    issueRouter
    
        .post("/:issueId", (req, res, next) => {
            const newComment = new comment(req.body)
            newComment.save((err, savedComment) => {
                if (err){
                    res.status(500)
                    return console.log(err)
                }
                return res.status(201).send(savedComment)
            })
        })


        module.exports = commentRouter
const express = require('express')
const authRouter = express.Router()
const comment = require('../models/comment.js')
const user = require('../models/user.js')

authRouter
    //Get All Issues
    .get('/',(req, res, next) => {
        issue.find((err, issue) => {
            if(err){
                res.status(500)
                return console.log(err)
            }
            return res.status(200).send(issue)
        })
    })

    //Post an Issue to the main page
    .post("/", (req, res, next) => {
        const newIssue = new issue(req.body)
        newIssue.save((err, savedIssue) => {
            if (err){
                res.status(500)
                return console.log(err)
            }
            return res.status(201).send(savedIssue)
        })
    })


    authRouter
    
        //Get One Issue from the main page
        .get('/:issueId', (req, res, next) => {
            issue.findOne({_id: req.params.issueId}, (err, foundIssue) => {
                if (err) {
                    res.status(500)
                    return console.log(err)
                }
                return res.status(200).send(foundIssue)
            })
        })

        //Edit an Issue
        .put('/:issueId', (req,res, next) => {
            issue.findOneAndUpdate(
                {_id: req.params.issueId},
                req.body,
                {new: true},
                (err, updatedIssue) => {
                    if (err) {
                        res.status(500)
                        return console.log(err)
                    }
                    return res.status(200).json(updatedIssue)
                }
            )
        })
        
        //Post a Comment on a specified Issue ----needs a separate ID
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


        //Delete an Issue
        .delete('/:issueId', (req, res, next) => {
            issue.findOneAndDelete({_id: req.params.issueId }, (err, deletedIssue) => {
                if(err) {
                    res.status(500)
                    return console.log(err)
                }
                return res.status(200).json({
                    response: `Successfully deleted ${deletedIssue.title} from the DB`
                })
            })
        })



    module.exports = authRouter
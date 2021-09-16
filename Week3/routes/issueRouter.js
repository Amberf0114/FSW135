const express = require('express')
const issueRouter = express.Router()
const issue = require('../models/issue.js')

issueRouter
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

    // post new issue with user id
    .post('/', (req, res, next) => {
        req.body.user = req.user._id
        const newIssue = new issue(req.body)
        newIssue.save((err, savedIssue) => {
            if (err){
                res.status(500)
                return console.log(err)
            }
            return res.status(201).send(savedIssue)
        })
    })

    .post("/:issueId", (req, res, next) => {
        req.body.user = req.user._id
        const newIssue = new issue(req.body)
        newIssue.save((err, savedIssue) => {
            if (err){
                res.status(500)
                return console.log(err)
            }
            return res.status(201).send(savedIssue)
        })
    })


issueRouter  
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

    module.exports = issueRouter
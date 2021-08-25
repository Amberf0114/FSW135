const mongoose = require('mongoose')
const Schema = mongoose.Schema
const IssueSchema = new Schema ({
    description :{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('IssueModel', IssueSchema)
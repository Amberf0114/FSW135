const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema ({
    username :{
        type: String,
        required: true,
        minLength: 5
    }
})

module.exports = mongoose.model('UserModel', UserSchema)
const mongoose = require('mongoose')
require('mongoose-type-email')
const Schema = mongoose.Schema


const UserSchema = new Schema ({
    email :{
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true
    },

    passcode : {
        type: String,
        required: true,
        minLength: 5,
        unique: true
    }
})

module.exports = mongoose.model('UserModel', UserSchema)
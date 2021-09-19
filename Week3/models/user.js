const mongoose = require('mongoose')
require('mongoose-type-email')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


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

UserSchema.pre('save', function(next){
    const user = this 
    if(!user.isModified('passcode')) return next()
    bcrypt.hash(user.passcode, 8, (err, hash) => {
        if(err) return next (err)
        user.passcode = hash
        next()
    })
})

UserSchema.methods.checkpasscode = function(passcodeAttempt, callback) {
    console.log("passcodeAttempt",passcodeAttempt)
    console.log("this.passcode",this.passcode)

    bcrypt.compare(passcodeAttempt, this.passcode, (err, isMatched) => {

        if(err) return callback(err)
        return callback(null, isMatched)
    })
}

UserSchema.methods.withoutpasscode = function() {
    const user = this.toObject()
    delete user.passcode
    return user
}

module.exports = mongoose.model('UserModel', UserSchema)


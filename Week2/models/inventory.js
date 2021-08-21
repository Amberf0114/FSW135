const mongoose = require('mongoose')    
const Schema = mongoose.Schema
const InventorySchema = new Schema ({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('InventoryModel', InventorySchema)

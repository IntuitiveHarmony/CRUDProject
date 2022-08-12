const mongoose = require ('mongoose')

const newSchema = new mongoose.Schema ({
    name: {type: String, require: true, unique: true},
    img: {type: String, unique: true},
    size: {type: String},
    style: {type:String},
    price: {type: Number, require: true},
    tags: [String],
    archive: {type: Boolean},
})

const Schema = mongoose.model('items', newSchema)

module.exports = Schema

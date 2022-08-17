const mongoose = require ('mongoose')

const newSchema = new mongoose.Schema ({
    name: {type: String, require: true},
    img: {type: String, unique: true},
    size: {type: String},
    style: {type:String},
    catagory: {type: String},
    price: {type: Number, require: true},
    tags: {type: [String]},
    archive: {type: Boolean, default: false},
})

const Schema = mongoose.model('items', newSchema)

module.exports = Schema

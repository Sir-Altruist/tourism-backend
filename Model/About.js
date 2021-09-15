const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AboutSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    capped: true, 
    size: 1024,
    max: 1,
    timestamps: true
})

module.exports = mongoose.model('about', AboutSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DestinationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    information: {
        type: String,
        required: true
    },
    gallery: {
        type: String,
        required: true
    },
    plan: {
        type: String
    },
    facility: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('destination', DestinationSchema)
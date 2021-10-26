const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DestinationSchema = new Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    duration: {
        type: String
    },
    price: {
        type: Number
    },
    flight: {
        type: String
    },
    description: {
        type: String 
    },
    information: {
        type: String
    },
    rating: {
        type: Number
    },
    gallery: {
        type: String
    },
    plan: {
        type: String
    },
    facility: {
        type: String
    },
    cities: {
        type: String
    },
    p_hotel_name: {
        type: String
    },
    p_hotel_rating: {
        type: String
    },
    p_hotel_price: {
        type: String
    },
    p_hotel_gallery: {
        type: String
    },
    p_from: {
        type: String
    },
    p_to: {
        type: String
    },
    excludes: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('destination', DestinationSchema)
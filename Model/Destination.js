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
    flight: {
        type: String,
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
    rating: {
        type: Number,
        required: true
    },
    gallery: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    facility: {
        type: String,
        required: true
    },
    cities: {
        type: String,
        required: true
    },
    p_hotel_name: {
        type: String,
        required: true
    },
    p_hotel_rating: {
        type: String,
        required: true
    },
    p_hotel_price: {
        type: String,
        required: true
    },
    p_hotel_gallery: {
        type: String,
        required: true
    },
    p_from: {
        type: String,
        required: true
    },
    p_to: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('destination', DestinationSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    nights: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    d_id: {
        type: String,
        required: true
    },
    b_hotel_people: {
        type: Number,
        required: true
    },
    b_hotel_name: {
        type: String,
        required: true
    },
    b_hotel_price: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('booking', BookingSchema)
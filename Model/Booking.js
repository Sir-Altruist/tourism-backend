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
    people: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    destination_id: {
        type: Schema.Types.ObjectId,
        ref: 'destination',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('booking', BookingSchema)
const express = require('express')
const router = express.Router()
const booking = require('../controller/booking')

router.get('/', booking.getBookings)
router.post('/add', booking.postBooking)

module.exports = router
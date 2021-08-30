const express = require('express')
const router = express.Router()
const destination = require('../controller/destination')

router.get('/', destination.getDestinations)
router.post('/add', destination.postDestination)
router.get('/:destinationId', destination.getSingleDestination)
router.put('/update/:destinationId', destination.editDestination)
router.delete('/:destinationId', destination.removeDestination)

module.exports = router
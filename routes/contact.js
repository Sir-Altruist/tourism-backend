const express = require('express')
const router = express.Router()
const contact = require('../controller/contact')



//contact form
router.post('/', contact.postContact)

module.exports = router
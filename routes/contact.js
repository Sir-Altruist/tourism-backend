const express = require('express')
const router = express.Router()
const contact = require('../controller/contact')



//contact form
router.post('/', contact.postContact)
router.get('/', contact.getContact)
router.post('/:contactId', contact.getSingleContact)

module.exports = router
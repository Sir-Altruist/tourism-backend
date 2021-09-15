const express = require('express')
const router = express.Router()
const about = require('../controller/about')



//contact form
router.post('/', about.postAbout)
router.get('/', about.getAbout)


module.exports = router
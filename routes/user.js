const express = require('express')
const router = express.Router()
const user = require('../controller/user')


//user form
router.get('/', user.getUsers)
router.post('/register', user.postUser)
router.get('/:userId', user.getUsers)
router.put('/update/:userId', user.editUser)
router.delete('/:userId', user.removeUser)



module.exports = router
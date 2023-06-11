const express = require('express');
const router = express.Router()
const authController = require('../../controllers/user/authController')

router.post('/login',authController.checkUser)

module.exports = router;
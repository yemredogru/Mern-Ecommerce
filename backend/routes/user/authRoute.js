const express = require('Express');
const router = express.Router()
const authController = require('../../controllers/user/authController')

router.post('/login',authController.checkUser)

module.exports = router;
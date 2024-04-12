const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

router.post('/mvc/register', authController.register);

router.post('/mvc/login', authController.login);

module.exports = router;

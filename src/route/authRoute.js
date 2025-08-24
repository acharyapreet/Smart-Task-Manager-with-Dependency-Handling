const express = require('express');
const { authController } = require('../controller/authController');
const authRouter = express.Router();

authRouter.post('/login',authController)

module.exports = authRouter;
const express = require('express')
const { signUpUSerController } = require('../controller/userController')

const userRouter = express.Router()

userRouter.post('/',signUpUSerController)

module.exports = userRouter;
const express = require('express');
const UserController = require('../controller/userController')
const authController = require('../controller/authController')
const router = express.Router()


router.post('/user/signup', authController.signup)
router.get('/user/login', authController.login)
router.route('/users')
    .get(authController.protect,
        UserController.getAll)
    .post(authController.protect,
        UserController.postUser)

        router.get('/user/:id',UserController.getOneUser)
module.exports = router
const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/userController.js')


userRoute.post('/login', userController.login);
userRoute.post('/register', userController.register);

module.exports =  userRoute;
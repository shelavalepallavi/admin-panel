const express = require('express');
const router = express.Router();
const login = require('../controllers/userController.js')

//login
router.post('/login', login)

module.exports =  router
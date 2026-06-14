const express = require('express')
const register = require('../controller/register')
const login = require("../controller/login")
const router = express.Router()

router.post("/register",register.registerUser)
router.post("/login",login.userLogin)

module.exports = router
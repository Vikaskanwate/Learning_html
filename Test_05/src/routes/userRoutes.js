const userController = require("../controller/userController")
const express = require('express')
const router = express.Router();

router.get("/get",userController.getAllUsers)


module.exports = router;
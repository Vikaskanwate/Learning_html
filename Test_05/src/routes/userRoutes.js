const userController = require("../controller/userController")
const express = require('express')
const router = express.Router();

router.get("/users",userController.getAllUsers)
router.post("/users",userController.createUser)
router.get("/users/:id",userController.getUserById)
router.put("/users/:id",userController.updateUsers)
router.delete("/users/:id",userController.deleteById)
module.exports = router;
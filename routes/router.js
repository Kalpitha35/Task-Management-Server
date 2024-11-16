const express = require('express')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const taskController = require('../controllers/taskController')
const router = new express.Router

//register : http://localhost:4000/register
router.post('/register',userController.registerController)

//login : http://localhost:4000/login
router.post('/login',userController.loginController)

//addtask
router.post('/addtask',jwtMiddleware,taskController.addTaskController)

module.exports = router
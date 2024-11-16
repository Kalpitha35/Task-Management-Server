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

//all-task : http://localhost:4000/all-task
router.get('/all-task',jwtMiddleware,taskController.getTaskController)

//delete-task : http://localhost:4000/delete-task
router.delete('/tasks/:id/delete-task',jwtMiddleware,taskController.taskDeleteController)
// update task
router.put('/tasks/:id/update', jwtMiddleware, taskController.taskEditController)

//delete-task : http://localhost:4000/delete-task
router.delete('/tasks/:id/delete-task',jwtMiddleware,taskController.taskDeleteController)
module.exports = router
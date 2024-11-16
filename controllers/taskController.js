const tasks = require('../models/taskModel')


// add task
exports.addTaskController = async(req,res)=>{
    console.log("Inside addTaskController");
    const {title,description,startDate,endDate,status,progress} = req.body
    const userId = req.userId
    console.log(title,description,startDate,endDate,status,progress);
    
    try{
        const newTask = new tasks({
            title,description,startDate,endDate,status,progress,userId
        })
        await newTask.save()
        res.status(200).json(newTask)
    }catch(err){
        res.status(401).json(err)
    }
    
}
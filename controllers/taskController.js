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

//get all task  : need authorisation

exports.getTaskController = async(req,res)=>{
    console.log("Inisde getTask");
    const userId = req.userId
    try{
        const alltask = await tasks.find({userId})
        res.status(200).json(alltask)
    }catch(err){
        res.status(401).json(err)
    }
}

//delete task

exports.taskDeleteController = async (req, res) => {
    console.log("Inside task delete controller");
    const {id} = req.params
    console.log(`task id: ${id}`);
    
    try {
        const deleteTask = await tasks.findByIdAndDelete({ _id: id })
        res.status(200).json(deleteTask)
    } catch (error) {
        res.status(400).json(error)
    }
}

//edit task
exports.taskEditController = async (req, res) => {
    console.log("inside taskEditController");
    const id = req.params.id;
    const { heading, description, startDate, endDate, status } = req.body;
  
    try {
      const updatedTask = await tasks.findByIdAndUpdate(
        { _id: id },
        { title, description, startDate, endDate, status },
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      res.status(200).json(updatedTask);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  //delete task

exports.taskDeleteController = async (req, res) => {
    console.log("Inside task delete controller");
    const {id} = req.params
    console.log(`task id: ${id}`);
    
    try {
        const deleteTask = await tasks.findByIdAndDelete({ _id: id })
        res.status(200).json(deleteTask)
    } catch (error) {
        res.status(400).json(error)
    }
}

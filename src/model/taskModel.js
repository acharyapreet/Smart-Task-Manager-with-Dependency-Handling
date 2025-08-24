const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    task : {
        title: {
             type: String, 
             required: true 
            },
        status: 
        { 
            type: String,
            enum: ["available", "blocked", "complete"],
             default: "available" 
            },
        user: 
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User", required: true },
        dependencies: 
        [{
             type: mongoose.Schema.Types.ObjectId, ref: "Task"
        }]
    }
})
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
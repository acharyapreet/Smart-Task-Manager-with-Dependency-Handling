const Task = require('../model/taskModel')
async function createTask(data) {
    return await Task.create(data);
}
async function findTasksByUser(userId) {
    return await Task.find({user : userId});
}
async function findTaskById(id) {
    return await Task.findById(id).populate(dependencies);
}
async function updateTask(id, data) {
    return await Task.findByIdAndUpdate(id, data, {new : true});
}
async function deleteTask(id) {
    return await Task.findByIdAndDelete(id);
}

module.exports = {
    createTask,
    findTasksByUser,
    findTaskById,
    updateTask,
    deleteTask
}
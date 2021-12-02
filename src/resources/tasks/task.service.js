const taskController = require('./task.memory.repository');

const getAll = () => taskController.getAll();
const getTaskById = (id) => taskController.getTask(id);
const createTask = (data) => taskController.createTask(data);
const updateTask = (id, data) => taskController.updateTask(id, data);
const deleteTask = (id) => taskController.deleteTask(id);

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };

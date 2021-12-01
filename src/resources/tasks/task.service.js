const usersController = require('./task.memory.repository');

const getAll = (board) => usersController.getAll(board);
const getTaskById = (board,id) => usersController.getTask(board,id);
const createTask = (board, data) => usersController.createTask(board, data);
const updateTask = (board,id,data) => usersController.updateTask(board,id,data);
const deleteTask = (board,id) => usersController.deleteTask(board,id);

module.exports = { getAll,getTaskById,createTask,updateTask,deleteTask };

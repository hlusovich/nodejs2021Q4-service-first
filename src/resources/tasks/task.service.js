const taskController = require('./task.memory.repository');
const { updateBoard, getBoardById } = require('../boards/board.service');

const getAll = (boardId) => taskController.getAll(getBoardById(boardId));
const getTaskById = (boardId, id) => taskController.getTask(getBoardById(boardId), id);
const createTask = (boardId, data) => {
  try {
    updateBoard(boardId, taskController.createTask(getBoardById(boardId), data));
  } catch (e) {

    console.log(e);

  }

};
const updateTask = (boardId, id, data) => {
  updateBoard(boardId, taskController.updateTask(getBoardById(boardId), id, data));
};
const deleteTask = (boardId, id) => {
  updateBoard(boardId, taskController.deleteTask(getBoardById(boardId), id));
};
module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };

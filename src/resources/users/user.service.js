const usersController = require('./user.memory.repository');
const boardController = require('../boards/board.memory.repository');

const getAll = () => usersController.getAll();
const getUserById = (id) => usersController.getUser(id);
const createUser = (data) => usersController.createUser(data);
const updateUser = (id, data) => usersController.updateUser(id, data);
const deleteUser = (id) => {
  usersController.deleteUser(id);
  boardController.unsubscribeUser(id);
};

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };

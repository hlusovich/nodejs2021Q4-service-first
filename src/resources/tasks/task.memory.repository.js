const Task = require('./task.model');

class TasksController {
  static getAll(board) {
    return board.columns.map(item => item.tasks).flat();
  }

  static getTask(board, id) {
    return TasksController.getAll(board).find(item => item.id === id);
  }

  static createTask(board, payload) {
    const editBoard = board.columns.map(item => {
        if (item.id === payload.columnId) {
          item.tasks.push(new Task(payload));
        }
        return item;
      }
    );
    return editBoard;
  }

  static updateTask(board, id, payload) {
    const editBoard = board.columns.map(item => {
        if (item.id === payload.columnId) {
          const updatedTasks = item.tasks.map(task => task.id === id ? new Task({ ...task, ...payload }) : task);
          return updatedTasks;
        }
        return item;
      }
    );
    return editBoard;
  }

  static deleteTask(board, id) {
    const editBoard = board.columns.map(item => {
        const filteredTasks = [...item.tasks.filter(task => task.id !== id)];
        return filteredTasks;
      }
    );
    return editBoard;
  }
}

module.exports = TasksController;

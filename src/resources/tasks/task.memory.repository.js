const Task = require('./task.model');


class TasksController {
  constructor() {
    this.tasks = [];
  }

  getAll() {
    return this.tasks;
  }

  getTask(id) {
    return this.tasks.find(item => item.id === id);
  }

  createTask(payload) {
    const newTask = new Task(payload);
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id, payload) {
    let newTask = null;
    this.tasks = this.tasks.map(item => {
      if (item.id === id) {
        newTask = new Task({ ...item, ...payload });
        return newTask;
      }
      return item;
    });
    return newTask;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(item => item.id !== id);
  }

  unsubscribeUser(id) {
    this.tasks = this.tasks.filter(item => {
      if (item.userId === id) {
        return { item, userId: null };
      }
      return item;
    });
  }

  unsubscribeBoard(id) {
    this.tasks = this.tasks.filter(item => item.boardId !== id);
  }
}

module.exports = new TasksController();

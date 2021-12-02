const Task = require('./task.model');

const tasks = [];

class TasksController {
  static getAll(board) {
    return board.columns.map(item => item.tasks).flat();
  }

  static getTask(board, id) {
    return TasksController.getAll(board).find(item => item.id === id);
  }

  static createTask(board, payload) {
    const editBoardColumns = board.columns.map(item => {
        if (item.id === payload.columnId) {
          if(item.tasks){
            item.tasks.push(new Task(payload));
          }
          else{
            tasks.push(new Task(payload))
          }

        }
        return item;
      }
    );
    return {...board, columns:editBoardColumns};
  }

  static updateTask(board, id, payload) {
    const editBoardColumns = board.columns.map(item => {
        if (item.id === payload.columnId) {
          const updatedTasks = item.tasks.map(task => task.id === id ? new Task({ ...task, ...payload }) : task);
          return {...item, tasks:updatedTasks};
        }
        return item;
      }
    );
    return {...board, columns:editBoardColumns};
  }

  static deleteTask(board, id) {console.log(id)
    const editBoardColumns = board.columns.map(item => ({...item, tasks: item.tasks.filter(task => task.id !== id)})
    );
    return {...board, columns:editBoardColumns};
  }
}

module.exports = TasksController;

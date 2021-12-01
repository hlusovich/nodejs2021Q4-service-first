const server = require('../../app');
const { getAll,getTaskById,createTask,updateTask,deleteTask } = require('./task.service');
const { getBoardById} = require('../boards/board.service');
const createRoute = require('../../../utils/routeCreater');

const routes = [createRoute('GET', '/boards/{id}/tasks', (req) => getAll(getBoardById(req.params.id))),
  createRoute('GET', '/boards/{id}/tasks/{taskId}', (req) => getTaskById(getBoardById(req.params.id), req.params.taskId)),
  createRoute('POST', '/boards/{id}/tasks', (req) => createTask(getBoardById(req.params.id), req.payload)),
  createRoute('PUT', '/boards/{id}/tasks/{taskId}', (req) => updateTask(getBoardById(req.params.id),req.params.taskId, req.payload)),
  createRoute('DELETE', '/boards/{id}/tasks/{taskId}', (req) => deleteTask(getBoardById(req.params.id),req.params.id))
];
server.route(routes);
module.exports = server;

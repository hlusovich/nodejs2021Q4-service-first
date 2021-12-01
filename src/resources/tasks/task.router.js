const server = require('../../app');
const { getAll,getTaskById,createTask,updateTask,deleteTask } = require('./task.service');
const createRoute = require('../../../utils/routeCreater');

const routes = [createRoute('GET', '/boards/{id}/tasks', (req) => getAll(req.params.id)),
  createRoute('GET', '/boards/{id}/tasks/{taskId}', (req) => getTaskById(req.params.id, req.params.taskId)),
  createRoute('POST', '/boards/{id}/tasks', (req) => createTask(req.params.id, req.payload)),
  createRoute('PUT', '/boards/{id}/tasks/{taskId}', (req) => updateTask(req.params.id,req.params.taskId, req.payload)),
  createRoute('DELETE', '/boards/{id}/tasks/{taskId}', (req) => deleteTask(req.params.id,req.params.taskId))
];
server.route(routes);
module.exports = server;

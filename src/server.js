const server = require('./app');
const { PORT } = require('./common/config');
require('./resources/users/user.router');

async function  startServer() {
  await server.start();
  console.log(`Server successfully started on port ${PORT}`)

}
startServer();

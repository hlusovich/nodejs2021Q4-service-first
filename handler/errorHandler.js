const Error404 = require('../Errors/404error');
const errorHandler = (error, res) => {
  console.log(error.message);
  return res.code(404);
};
module.exports = errorHandler;

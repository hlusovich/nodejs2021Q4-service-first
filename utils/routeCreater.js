const setStatusCode = require('./setStatusCode');
const createRoute = (method, path, handler) => {
  return {
    method,
    path,
    handler: function(req, h) { // request handler method
      return h.response(handler(req, h)).code(setStatusCode(method)); // reply with text.
    }
  };
};
module.exports = createRoute;

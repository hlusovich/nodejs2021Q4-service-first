const codeStatuses = {
  POST:201,
  GET:200,
  PUT:201,
  DELETE:201
};

const  setStatusCode = (method)=> codeStatuses[method];
module.exports = setStatusCode;

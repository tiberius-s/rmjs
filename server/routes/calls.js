const https = require("utils/httpService");

// Closure that will pass the status code on successful request
const send = code => (req, res, next) => {
  https
    .call(req.opts)
    .then(data => {
      res.status(code).json(data);
    })
    .catch(next);
};

module.exports = {
  send: send
};

const routes = require('express').Router();
const request = require('routes/calls');

// administration
routes.get('/administration/users/current', request.send(200));

// lists
routes.get('/lists/:acct', request.send(200));
routes.post('/lists/:acct', request.send(201));
routes.get('/lists/:acct/:list', request.send(200));
routes.put('/lists/:acct/:list', request.send(204));
routes.delete('/lists/:acct/:list', request.send(204));



// For testing
routes.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello World!' });
})


module.exports = routes;